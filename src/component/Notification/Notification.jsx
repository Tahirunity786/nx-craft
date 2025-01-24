'use client';

import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

const Notification = () => {
  const getUserToken = () => {
    try {
      return localStorage.getItem("secure") || null;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };
  // const setToken = (token) => {
  //   try {
  //     localStorage.setItem("secure", token);
  //   } catch (error) {
  //     console.error("Error saving token:", error);
  //   }
  // };


  useEffect(() => {
    const registerServiceWorker = async () => {
      if (!('serviceWorker' in navigator)) {
        console.warn('Service Worker is not supported in this browser.');
        return;
      }

      try {
        const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');

        const messaging = getMessaging(firebaseApp);

        // Request Firebase Cloud Messaging token
        const token = await getToken(messaging, {
          vapidKey: 'BNDFzWbLS0xdYIiX_XqD4xbw0JqSPTejZovRLMCzOi4HFNMQm2r1TwggMeFf446bVLbP07npWSHXjOI-M_KNGWw',
          serviceWorkerRegistration: registration,
        });

        if (token) {
          await sendTokenToServer(token);
        } else {
          console.warn('No token available. Requesting permission.');
        }
      } catch (error) {
        console.error('Error during Service Worker registration or FCM setup:', error);
      }
    };

    const sendTokenToServer = async (token) => {
      try {
        const csrfToken = getCsrfToken();
        const user_token = getUserToken();

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/fcm_notify_saver`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(csrfToken && { 'X-CSRFToken': csrfToken }),
          },
          body: JSON.stringify({ fcm_token: token,  token: user_token }),
        });

        if (!response.ok) {
          throw new Error(`Failed to submit token: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error sending token to server:', error);
      }
    };

    const getCsrfToken = () => {
      return document.cookie
        .split('; ')
        .find((row) => row.startsWith('csrftoken='))
        ?.split('=')[1] || null;
    };

    registerServiceWorker();
  }, []);

  return null;
};

export default Notification;
