import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

import { db } from 'services/firebase'

import { Task } from "todos/types";
import { Form, TasksList } from "components";

export const Todos = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = () => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    })
  };

  useEffect(() => {
    getTasks()
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <Form />
      <TasksList tasks={tasks} />
    </>
  )
};
