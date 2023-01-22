import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAh2Rc3dBr8ir9KXq8jhYI90FPP1fc5wTc",
  authDomain: "crown-db-ffc53.firebaseapp.com",
  projectId: "crown-db-ffc53",
  storageBucket: "crown-db-ffc53.appspot.com",
  messagingSenderId: "467736247810",
  appId: "1:467736247810:web:ec5128fba32714a522b11b",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithgooglePopup = () => signInWithPopup(auth, provider);
export const db=getFirestore();
export const createUserDocFromAuth=async (userauth)=>{
    const userDocRef=doc(db,'users',userauth.uid)
   
    const userSnapshot=await getDoc(userDocRef);
   if (!userSnapshot.exists()) {
    const {displayName,email}=userauth
    const createdAt=new Date();
    try {
        await setDoc(userDocRef,{displayName,email,createdAt})
    } catch (error) {
       console.log("Error creating the usetr",error.message) 
    }
   }
   return userDocRef;
}
