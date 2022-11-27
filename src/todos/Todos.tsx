import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

import { db } from 'services/firebase'

import { RenderedTask, Task } from "todos/types";
import { Form, TasksList } from "components";

export const Todos = () => {
  const [tasks, setTasks] = useState<RenderedTask[]>([]);

  const getTasks = () => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
        edited: false,
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
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  )
};
