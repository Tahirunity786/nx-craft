'use client';

import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import styles from './notification.module.css'


// Initialize Firebase app

const Notification = () => {
  // const [notifications, setNotifications] = useState([]);

 // Add a new notification to the list and auto-remove after 5 seconds.
//  const addNotification = (message, title = 'New Message') => {
//   const id = Date.now();
//   setNotifications(prev => [...prev, { id, title, message }]);
//   setTimeout(() => {
//     setNotifications(prev => prev.filter(notif => notif.id !== id));
//   }, 5000);
// };
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASEAPI_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const getUserToken = () => {
    try {
      return localStorage.getItem("secure") || null;
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };
  const setToken = (token, user) => {
    try {
      localStorage.setItem("secure", token);
      localStorage.setItem("user_id", JSON.stringify(user));
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };
  const fetchToken = async () => {
    const token = getUserToken();
    if (!token) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_END_POINT}/control/secure`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.cookie && data.user) {
            setToken(data.cookie, data.user);
            //  prm
          }
        } else {
          console.error("Failed to fetch token:", response.status);
        }
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    }
  };
// // Example: Open a WebSocket to listen for notification messages.
// useEffect(() => {
  
//   const token = getUserToken();
//   console.log(token)
//   const ws = new WebSocket(
//     `ws://127.0.0.1:8000/ws/notification/${encodeURIComponent(token)}`
//   );
//   ws.onopen = () => {
//     console.log('Notification WebSocket connected');
//   };
//   ws.onmessage = (event) => {
//     try {
//       const notificationdata = JSON.parse(event.data);
//       // send_notification
//       // Assume the received data has a "message" property (customize as needed).
//       if (notificationdata && notificationdata.message) {
//         addNotification(notificationdata.message, notificationdata.title || 'New Message');
//       }
//     } catch (error) {
//       console.error('Error parsing notification message:', error);
//     }
//   };
//   ws.onerror = (error) => {
//     console.error('WebSocket error:', error);
//   };
//   ws.onclose = () => {
//     console.log('Notification WebSocket closed');
//   };

//   return () => ws.close();
// }, []);

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
          body: JSON.stringify({ fcm_token: token, token: user_token }),
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

    fetchToken()
    registerServiceWorker();
  }, []);

  return null;
  // return (
  //   <div className={styles.notificationContainer}>
  //     {notifications.map(notif => (
  //       <div key={notif.id} className={styles.notification}>
  //         <div className={styles.title}>{notif.title}</div>
  //         <div className={styles.body}>{notif.message}</div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Notification;
