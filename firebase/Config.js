import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = ({
    apiKey: "AIzaSyAp60_kyVLQRbVyvhVX83pJxX_4DDwDs34",
    authDomain: "nordic-insight-821b4.firebaseapp.com",
    databaseURL: "https://console.firebase.google.com/u/1/project/nordic-insight-821b4/database/nordic-insight-821b4-default-rtdb/data/~2F",
    projectId: "nordic-insight-821b4",
    storageBucket: "nordic-insight-821b4.appspot.com",
    messagingSenderId: "941493255813",
    appId: "1:941493255813:web:29d44dd718d9047b7cf3ec"
});

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const USERS_REF = '/users/';
