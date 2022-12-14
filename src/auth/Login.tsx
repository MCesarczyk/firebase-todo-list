import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../services/firebase";

import { Layout } from "components/Layout";
import { Button } from "components/Button";
import { TextRow } from "components/TextRow";
import { TextBox } from "components/TextBox";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
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
      <TextBox
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <Button
        onClick={() => logInWithEmailAndPassword(email, password)}
      >
        Login
      </Button>
      <Button
        color="#4285f4"
        onClick={signInWithGoogle}
      >
        Login with Google
      </Button>
      <TextRow>
        <Link to="/reset">Forgot Password</Link>
      </TextRow>
      <TextRow>
        Don't have an account? <Link to="/register">Register</Link> now.
      </TextRow>
    </Layout>
  );
};
