import { StyledTaskList, ListItem, TaskContent, Button, StyledLink } from "./styled";
import { Task } from "todos/types";

interface TasksListProps {
  tasks: Task[];
};

export const TasksList = ({tasks}:TasksListProps) => (
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
            <StyledLink onClick={() => console.log("edit task")}>{task.data.title}...</StyledLink>
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
  );
