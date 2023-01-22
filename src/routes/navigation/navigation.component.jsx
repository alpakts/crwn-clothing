import { Outlet } from "react-router-dom";
import { Fragment} from "react";
import { Link } from "react-router-dom";
import './navigation.styles.scss'
import {ReactComponent  as CrwnLogo} from "../../assets/crown.svg"
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
      <Link className="logo-container" to={'/'}>
        <CrwnLogo />
        </Link>
        <div className="links-container">
          <div className="nav-links-container" >
          <Link to="/shop" className="nav-link">SHOP</Link>
          <Link to="/singin" className="nav-link">SIGN IN</Link>

          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default Navigation;
