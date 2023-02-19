import "./login.css";
 import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo"> facebook </h3>
          <span className="loginDesc">
            Connect with friends and the world around you on fecebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <Link to="/profile" className="loginLink">Log In</Link>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="loginRegisterLink">
              Create a New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
