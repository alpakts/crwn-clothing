import SignUpForm from "../../components/sign-up/sign-up-form/sign-up-from";
import SignIn from "../../components/sign-up/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss"
const Authentication = () => {
  return (
  
      <div className="authentication-container">
        <SignIn />
        <SignUpForm />
      </div>
    
  );
};
export default Authentication;
