import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDcF6DEVFAyeM_jGz2qDTLOt8ey8d0ijM",
    authDomain: "medium-clone-1effb.firebaseapp.com",
    projectId: "medium-clone-1effb",
    storageBucket: "medium-clone-1effb.appspot.com",
    messagingSenderId: "254020324414",
    appId: "1:254020324414:web:dbb5c30135bc038744956f"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
