import { useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      // Read admin accounts directly from Firestore
      const adminQuery = query(
        collection(db, "admin"),
        where("email", "==", email.trim())
      );

      const snapshot = await getDocs(adminQuery);

      // Admin email not found
      if (snapshot.empty) {
        alert("Invalid admin email or password.");
        setLoading(false);
        return;
      }

      let adminFound = false;

      snapshot.forEach((doc) => {
        const admin = doc.data();

        // Check password
        if (admin.password === password) {
          // Check role
          if (admin.role !== "admin") {
            alert("This account is not an admin account.");
            return;
          }

          // Check account status
          if (admin.isActive !== true) {
            alert("This admin account is inactive.");
            return;
          }

          adminFound = true;
        }
      });

      if (!adminFound) {
        alert("Invalid admin email or password.");
        setLoading(false);
        return;
      }

      // Save admin login information
      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      localStorage.setItem(
        "adminEmail",
        email.trim()
      );

      alert("Admin Login Successful!");

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Admin Login Error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: 25,
            textAlign: "center",
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
            boxSizing: "border-box",
            borderRadius: 8,
            border: "1px solid #475569",
            outline: "none",
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
            boxSizing: "border-box",
            borderRadius: 8,
            border: "1px solid #475569",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: 15,
            background: loading ? "#64748b" : "#2563eb",
            color: "white",
            border: 0,
            borderRadius: 8,
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {loading ? "Logging..." : "Login"}
        </button>
      </form>
    </div>
  );
}