import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import "../css/login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-logo">
          <img src={logo} alt="faster-iptv-logo" />
        </div>
        <div className="login-code">
          <h4 className="login-heading">Authentication Code</h4>
          <input
            className="login-input"
            type="text"
            placeholder="Enter Activation Code"
            required
          />
          <NavLink className="login-link" to="/home">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
