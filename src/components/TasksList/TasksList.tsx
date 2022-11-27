import { StyledTaskList, ListItem, TaskContent, Button, StyledLink, Textarea, TextareaWrapper, TextareaButtonsWrapper } from "./styled";
import { RenderedTask } from "todos/types";

interface TasksListProps {
  tasks: RenderedTask[];
  setTasks: any;
};

export const TasksList = ({ tasks, setTasks }: TasksListProps) => {
  const toggleTaskEdited = (taskId: string) => {
    setTasks((tasks: RenderedTask[]) => tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, edited: !task.edited }
      }

      return task;
    }));
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
                <Textarea value={task.data.description} />
                <TextareaButtonsWrapper>
                  <Button accept onClick={() => toggleTaskEdited(task.id)}>✔</Button>
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
