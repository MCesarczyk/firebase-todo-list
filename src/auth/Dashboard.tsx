import { useCallback, useEffect, useState } from "react";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db, logout } from "services/firebase";
import { User } from "firebase/auth";

import { Layout } from "components/Layout";
import { Button } from "components/Button";
import { TextRow } from "components/TextRow";

interface DashboardProps {
  user: User | null | undefined;
  loading: boolean;
  error?: Error;
};

export const Dashboard = ({ user, loading, error }: DashboardProps) => {
  const [name, setName] = useState("");

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

    fetchUserName();
  }, [user, loading, fetchUserName]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  return (
    <Layout>
      Logged in as
      <TextRow>{name}</TextRow>
      <TextRow>{user?.email}</TextRow>
      <Button onClick={logout}>
        Logout
      </Button>
    </Layout>
  );
};
