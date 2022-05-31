// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhuluKczzbNK418S00_yhYWsV09n-XR0g",
    authDomain: "netflix-clone-yt-36b3e.firebaseapp.com",
    projectId: "netflix-clone-yt-36b3e",
    storageBucket: "netflix-clone-yt-36b3e.appspot.com",
    messagingSenderId: "615711753516",
    appId: "1:615711753516:web:dcaa448c96366b65a4d889"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }