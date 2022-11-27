import { useState } from "react";
import { useLocation } from "react-router-dom";
import { StyledTaskList, ListItem, TaskContent, Button, StyledLink, Textarea, TextareaWrapper, TextareaButtonsWrapper } from "./styled";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from 'services/firebase';
import { SEARCH_QUERY_PARAM_NAME } from "app/constants";
import { RenderedTask } from "todos/types";
import { TASK_TITLE_TRIMMED_LENGTH } from "todos/constants";

interface TasksListProps {
  hideDone: boolean;
  tasks: RenderedTask[];
  setTasks: any;
};

export const TasksList = ({ tasks, setTasks, hideDone }: TasksListProps) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(SEARCH_QUERY_PARAM_NAME);
  const [textareaValue, setTextareaValue] = useState<any>("");

  const toggleTaskEdited = (taskId: string) => {
    setTasks((tasks: RenderedTask[]) => tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, edited: !task.edited }
      }

      return task;
    }));

    setTextareaValue(tasks.filter(({ id }) => id === taskId)[0].data.description);
  };

  const handleUpdate = async (task: RenderedTask) => {
    const taskDocRef = doc(db, 'tasks', task.id);

    try {
      await updateDoc(taskDocRef, {
        title: textareaValue.slice(0, TASK_TITLE_TRIMMED_LENGTH),
        description: textareaValue,
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleDelete = async (taskId: string) => {
    const taskDocRef = doc(db, 'tasks', taskId);

    try {
      await deleteDoc(taskDocRef);
    } catch (err) {
      alert(err)
    }
  };

  const getFilteredTasks = (query: string | null) => {
    if (!query || query.trim() === "") {
      return tasks;
    }

    return tasks.filter(({ data }) => data.description.toUpperCase().includes(query.trim().toUpperCase()));
  };

  const filteredTasks = getFilteredTasks(query);

  const handleCheckedChange = async (taskId: string) => {
    const actualTaskState = tasks.filter(({ id }) => id === taskId)[0].data.completed;
    const taskDocRef = doc(db, 'tasks', taskId);

    try {
      await updateDoc(taskDocRef, {
        completed: !actualTaskState,
      })
    } catch (err) {
      alert(err)
    }
  };

  return (
    <StyledTaskList>
      {filteredTasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.data.completed && hideDone}
        >
          <Button
            toggleDone
            onClick={() => handleCheckedChange(task.id)}
          >
            {task.data.completed ? "✔" : " "}
          </Button>
          <TaskContent done={task.data.completed}>
            {!task.edited ? (
              <StyledLink onClick={() => toggleTaskEdited(task.id)}>{task.data.title}...</StyledLink>
            ) : (
              <TextareaWrapper>
                <Textarea value={textareaValue} onChange={(e: any) => setTextareaValue(e.target.value)} />
                <TextareaButtonsWrapper>
                  <Button accept onClick={() => handleUpdate(task)}>✔</Button>
                  <Button abort onClick={() => toggleTaskEdited(task.id)}>✘</Button>
                </TextareaButtonsWrapper>
              </TextareaWrapper>
            )}
          </TaskContent>
          <Button
            remove
            onClick={() => handleDelete(task.id)}
          >
            🗑
          </Button>
        </ListItem>
      ))}
    </StyledTaskList>
  )
};
