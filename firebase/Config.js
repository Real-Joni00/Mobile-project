import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = ({
    apiKey: "AIzaSyAp60_kyVLQRbVyvhVX83pJxX_4DDwDs34",
    authDomain: "nordic-insight-821b4.firebaseapp.com",
    databaseURL: "https://nordic-insight-821b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nordic-insight-821b4",
    storageBucket: "nordic-insight-821b4.appspot.com",
    messagingSenderId: "941493255813",
    appId: "1:941493255813:web:29d44dd718d9047b7cf3ec"
});

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export { auth };

export const USERS_REF = '/users/';
