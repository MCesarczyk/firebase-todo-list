import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../services/firebase";

import { Button } from "components/Button";
import { Layout } from "components/Layout";
import { TextBox } from "components/TextBox";
import { TextRow } from "components/TextRow";


export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

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
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
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
      <Button onClick={register}>
        Register
      </Button>
      <Button
        branded
        onClick={signInWithGoogle}
      >
        Register with Google
      </Button>
      <TextRow>
        Already have an account? <Link to="/login">Login</Link> now.
      </TextRow>
    </Layout>
  );
};
