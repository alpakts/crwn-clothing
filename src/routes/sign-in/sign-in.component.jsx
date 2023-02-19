import {
  signInWithgooglePopup,
  createUserDocFromAuth,
  signInWithgoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(() => {
    async function getGoogUser() {
      let response = await getRedirectResult(auth);
      if (response) {
        const UserDocRef=await createUserDocFromAuth(response.user)
      }
    }
    getGoogUser();
  }, []);
  const logGoogleUser = async () => {
    const response = await signInWithgooglePopup();
    const userRef = await createUserDocFromAuth(response.user);
  };
  const logGoogleRedirectUser = async () => {
    const response = await signInWithgoogleRedirect();
    console.log(response);
    const userRef = await createUserDocFromAuth(response.user);
  };
  return (
    <div>
      <h1>sign in page</h1>
      <button onClick={logGoogleUser}>Sign in With Google </button>
      <button onClick={signInWithgoogleRedirect}>
        Sign in With Google Redirect{" "}
      </button>
    </div>
  );
};
export default SignIn;
