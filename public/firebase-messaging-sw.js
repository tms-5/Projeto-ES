importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBkcy8YJ4X6qtbccB-GGVJW-JeZUNNHrTc",
  authDomain: "projeto-es-if977.firebaseapp.com",
  databaseURL: "https://projeto-es-if977-default-rtdb.firebaseio.com",
  projectId: "projeto-es-if977",
  storageBucket: "projeto-es-if977.appspot.com",
  messagingSenderId: "512620145546",
  appId: "1:512620145546:web:ee02f5f4f1735377427673",
  measurementId: "G-N3GPTH5VLP",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});