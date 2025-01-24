importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDs9xZG1wemU8K-FiRG8sZBjEGgBjL6XT0",
  authDomain: "nxcraft-96cb0.firebaseapp.com",
  projectId: "nxcraft-96cb0",
  storageBucket: "nxcraft-96cb0.appspot.com",
  messagingSenderId: "651506459966",
  appId: "1:651506459966:web:76642de2a82d79351d386f",
  measurementId: "G-6XRBTY308K",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Default Title';
  const notificationOptions = {
    body: payload.notification?.body || 'Default Body',
    icon: payload.notification?.icon || '/default-icon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
