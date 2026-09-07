import "./Login.css";
import { useEffect, useState } from "react";
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate, useSearchParams, Link } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const [status, setStatus] = useState("verifying"); // verifying | ready | invalid | success
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!oobCode) {
      setStatus("invalid");
      return;
    }

    verifyPasswordResetCode(auth, oobCode)
      .then((verifiedEmail) => {
        setEmail(verifiedEmail);
        setStatus("ready");
      })
      .catch(() => {
        setStatus("invalid");
      });
  }, [oobCode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      alert("Password-ku waa inuu ka koobnaadaa ugu yaraan 6 xaraf.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Labada password ma iswaafaqsana.");
      return;
    }

    try {
      setSubmitting(true);

      await confirmPasswordReset(auth, oobCode, newPassword);

      setStatus("success");
    } catch (error) {
      alert("Link-gu wuu dhacay ama waa khaldan yahay. Isku day mar kale.");
      setStatus("invalid");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {status === "verifying" && (
          <>
            <h1>Hubinaya Link-ga...</h1>
            <p>Fadlan sug, waxaan hubinaynaa link-gaaga.</p>
          </>
        )}

        {status === "invalid" && (
          <>
            <h1>Link-gu Wuu Dhacay</h1>
            <p>
              Link-kan reset-ka password-ku wuu dhacay ama horeba loo
              isticmaalay. Waxaad ka codsan kartaa mid cusub bogga Login-ka.
            </p>
            <Link to="/login" className="login-btn" style={{ display: "block", textAlign: "center", textDecoration: "none", marginTop: 20 }}>
              Ku Noqo Login
            </Link>
          </>
        )}

        {status === "ready" && (
          <>
            <h1>Samee Password Cusub</h1>
            <p>Waxaad samaynaysaa password cusub: {email}</p>

            <form onSubmit={handleSubmit}>

              <input
                type="password"
                placeholder="Password Cusub"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Xaqiiji Password-ka Cusub"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                required
              />

              <button className="login-btn" type="submit" disabled={submitting}>
                {submitting ? "Keydinaya..." : "Beddel Password"}
              </button>

            </form>
          </>
        )}

        {status === "success" && (
          <>
            <h1>Password Waa La Beddelay!</h1>
            <p>Hadda waxaad ku soo gali kartaa password-kaaga cusub.</p>
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
              style={{ marginTop: 20 }}
            >
              Ku Soo Gal (Login)
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default ResetPassword;