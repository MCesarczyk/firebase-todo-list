import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";

import { auth, sendPasswordReset } from "../../services/firebase";
import "./style.css";


const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  return (
    <Layout>
      <input
        type="text"
        className="reset__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <button
        className="reset__btn"
        onClick={() => sendPasswordReset(email)}
      >
        Send password reset email
      </button>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </Layout>
  );
};

export default Reset;
