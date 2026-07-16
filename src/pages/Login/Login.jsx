import "./Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Welcome Back!");

      navigate("/");
    } catch (error) {
      alert("Email ama Password waa khaldan yihiin.");
    }
  };

  const resetPassword = async () => {
    if (!email) {
      alert("Marka hore geli Email-kaaga.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);

      alert("Password reset email waa laguu diray.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to your Gallad.Tech Platforms account.</p>

        <form onSubmit={loginUser}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <div className="forgot">
            <button
              type="button"
              onClick={resetPassword}
              className="forgot-btn"
            >
              Forgot Password?
            </button>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?{" "}
          <Link to="/register">Create Account</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;