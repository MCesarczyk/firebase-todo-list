import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";

import { db } from 'services/firebase'

import { RenderedTask } from "todos/types";
import { Form, TasksList } from "components";
import { AuxiliaryButtons } from "components/AuxiliaryButtons";
import { Search } from "components/Search";
import styled from "styled-components";

const ExtraContentWrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Todos = () => {
  const [tasks, setTasks] = useState<RenderedTask[]>([]);
  const [hideDone, setHideDone] = useState(false);

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

  const markTaskDone = async (id: string, status: boolean) => {
    const taskDocRef = doc(db, 'tasks', id);

    try {
      await updateDoc(taskDocRef, {
        completed: status,
      })
    } catch (err) {
      alert(err)
    }
  };

  const handleMarkAllTasksStatus = async (status: boolean) => {
    const taskIds = tasks.map(({ id }) => id);

    taskIds.forEach(id => {
      markTaskDone(id, status);
    });
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
      <ExtraContentWrapper>
        <Search />
        <AuxiliaryButtons
          available={!!tasks.length}
          hideDone={hideDone}
          allDone={tasks.every(({ data }) => data.completed)}
          allUndone={tasks.every(({ data }) => !data.completed)}
          setHideDone={setHideDone}
          setAllDoneStatus={handleMarkAllTasksStatus}
        />
      </ExtraContentWrapper>
      <TasksList tasks={tasks} setTasks={setTasks} hideDone={hideDone} />
    </>
  )
};
