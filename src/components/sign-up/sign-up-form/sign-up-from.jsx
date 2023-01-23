import { useState } from "react";
const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}
const SignUpForm = () => {
    const [formFields,SetFormFields]=useState(defaultFormFields);
    const{displayName,email,password,confirmPassword}=formFields
    const handleChange=(event)=>{
        const{name}=event
    }
  return (
    <div>
      <h1>Sign up with your email and you password</h1>
      <form onSubmit={() => {
        
      }}>
        <label htmlFor="">Display Name</label>
        <input type="text" onChange={handleChange} required name="displayName" value={displayName} />
        <label htmlFor="">Email</label>
        <input type="email" onChange={handleChange} required name="email"value={email}  />
        <label htmlFor="">Password</label>
        <input type="password" onChange={handleChange} required name="password" value={password}  />
        <label htmlFor="">Confirm Password</label>
        <input type="password" onChange={handleChange} required  name="confirmPassword"value={confirmPassword}  />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignUpForm