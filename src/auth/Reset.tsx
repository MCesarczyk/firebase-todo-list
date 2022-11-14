import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { auth, sendPasswordReset } from "../services/firebase";

import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { TextBox } from "components/TextBox";
import { TextRow } from "components/TextRow";


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
      <TextBox
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <Button
        onClick={() => sendPasswordReset(email)}
      >
        Send password reset email
      </Button>
      <TextRow>
        Don't have an account? <Link to="/register">Register</Link> now.
      </TextRow>
    </Layout>
  );
};

export default Reset;
