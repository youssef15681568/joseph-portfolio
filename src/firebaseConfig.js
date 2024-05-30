import {initializeApp} from 'firebase/app'
import {getFirestore, collection, doc, setDoc, serverTimestamp} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAENiVvXT9ZvCtH61DRzMrZt-RG7sxidb4",
  authDomain: "josephportfolio-d95b0.firebaseapp.com",
  projectId: "josephportfolio-d95b0",
  storageBucket: "josephportfolio-d95b0.appspot.com",
  messagingSenderId: "455601389397",
  appId: "1:455601389397:web:13c11f43fc082366a439dc",
  measurementId: "G-CGDR75RJTZ"
}


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db,collection, doc, setDoc, serverTimestamp}