import { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

import { db } from 'services/firebase'

import { Button } from "components/Button";
import { AddTodo } from "./AddTodo";
import { TodosList } from "./TodosList";
import { Task } from "./types";

const ButtonWrapper = styled.div`
  margin: 2rem;
  text-align: center;
`;

export const Todos = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    const q = await query(collection(db, 'tasks'), orderBy('created', 'desc'));
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
      <h1 style={{ textAlign: 'center' }}>Todos</h1>
      <AddTodo visible={addModalVisible} setVisible={setAddModalVisible} />
      <ButtonWrapper>
        <Button onClick={() => setAddModalVisible(true)}>Add new todo</Button>
      </ButtonWrapper>
      <TodosList tasks={tasks} />
    </>
  )
};
