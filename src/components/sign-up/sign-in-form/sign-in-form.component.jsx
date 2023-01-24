import { useState } from "react";
import "./sign-in.styles.scss";
import {
  createUserDocFromAuth,
  signInWithEmailPassword,
  signInWithgooglePopup,
} from "../../../utils/firebase/firebase.util";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => { 
    debugger;
    event.preventDefault();
    try {
      const response  = await signInWithEmailPassword(email, password);
      console.log(response);
      resetFormFields();

    } catch (error) {
        if (error.code=="auth/wrong-password") {
            alert("Wrong Password or Email")
        }
        console.log(error)
    }
  };
  const signInGoogleUser = async () => {
    const response = await signInWithgooglePopup();
    const userRef = await createUserDocFromAuth(response.user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields)
  };
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
