import styled from "styled-components";
import { Task } from './types';

const List = styled.ul`
  list-style: none;
  padding: 0 5vw;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #525252;
`;

const ListItemInnerWrapper = styled.div`
  margin-left: 1rem;
`;

const ListItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.25rem;
`;

const ListItemContent = styled.p`
  margin: 0;
`;

interface TodosListProps {
  tasks: Task[];
};

export const TodosList = ({ tasks }: TodosListProps) => {
  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <input type='checkbox' checked={task.data.completed} />
          <ListItemInnerWrapper>
            <ListItemTitle>{task.data.title}</ListItemTitle>
            <ListItemContent>{task.data.description}</ListItemContent>
          </ListItemInnerWrapper>
        </ListItem>
      ))}
    </List>
  )
};
