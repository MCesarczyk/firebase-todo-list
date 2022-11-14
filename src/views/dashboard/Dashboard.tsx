import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth, db, logout } from "../../services/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./style.css";
import { Layout } from "../../components/Layout";


const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  }, [user?.uid]);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, fetchUserName, navigate]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  return (
    <Layout>
      Logged in as
      <div>{name}</div>
      <div>{user?.email}</div>
      <button className="dashboard__btn" onClick={logout}>
        Logout
      </button>
    </Layout>
  );
};

export default Dashboard;
