import "./register.css";
import { Link } from 'react-router-dom';


export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> facebook </h3>
          <span className="loginDesc">
            Connect with friends and the world around you on facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Password Again" className="loginInput" />
            <Link to="/profile" className="loginButton">Sign Up</Link>
            <Link to="/login" className="loginRegisterButton">
              Log into Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
