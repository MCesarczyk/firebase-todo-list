import { useState } from "react";
import { StyledTaskList, ListItem, TaskContent, Button, StyledLink, Textarea, TextareaWrapper, TextareaButtonsWrapper } from "./styled";
import { doc, updateDoc } from "firebase/firestore";
import { RenderedTask } from "todos/types";
import { db } from 'services/firebase';
import { TASK_TITLE_TRIMMED_LENGTH } from "todos/constants";

interface TasksListProps {
  tasks: RenderedTask[];
  setTasks: any;
};

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
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
    const taskDocRef = doc(db, 'tasks', task.id)
    try {
      await updateDoc(taskDocRef, {
        title: textareaValue.slice(0, TASK_TITLE_TRIMMED_LENGTH),
        description: textareaValue,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <StyledTaskList>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.data.completed}
        >
          <Button
            toggleDone
            onClick={() => console.log("done")}
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
            onClick={() => console.log("removeTask")}
          >
            🗑
          </Button>
        </ListItem>
      ))}
    </StyledTaskList>
  )
};
