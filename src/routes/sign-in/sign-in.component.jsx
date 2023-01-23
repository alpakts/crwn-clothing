import SignUpForm from "../../components/sign-up/sign-up-form/sign-up-from";
import { signInWithgooglePopup,createUserDocFromAuth } from "../../utils/firebase/firebase.util";


const SignIn =()=>{
    const logGoogleUser =async()=>{
        const response=await signInWithgooglePopup();
        const userRef=await  createUserDocFromAuth(response.user)
    }
return(
    <div>
        <h1>sign in page</h1>
        <SignUpForm/>
    <button onClick={logGoogleUser}>Sign in With Google </button>
    </div>
)
};
export default SignIn;
