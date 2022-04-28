import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed.js';

const config = {
  apiKey: "AIzaSyDYnBD2tYiKSnzOlTERiVyOmyqPmrWMJMk",
  authDomain: "netflix-clone-f7460.firebaseapp.com",
  databaseURL: 'https://netflix-clone-f7460-default-rtdb.firebaseio.com/',
  projectId: "netflix-clone-f7460",
  storageBucket: "netflix-clone-f7460.appspot.com",
  messagingSenderId: "2988514238",
  appId: "1:2988514238:web:18c179d09277bbd58237ef"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
