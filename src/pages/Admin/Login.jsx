import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin/dashboard");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: 420,
          background: "#1e293b",
          padding: 35,
          borderRadius: 15,
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: 25,
          }}
        >
          Admin Login
        </h1>

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 14,
            marginBottom: 20,
          }}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 14,
            marginBottom: 20,
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 15,
            background: "#2563eb",
            color: "white",
            border: 0,
            cursor: "pointer",
          }}
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
}