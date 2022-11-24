import { useState } from "react";
import styled from "styled-components";
import { Button } from "components/Button";
import { AddTodo } from "./AddTodo";

const ButtonWrapper = styled.div`
  margin: 2rem;
  text-align: center;
`;

export const Todos = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todos</h1>
      <AddTodo visible={addModalVisible} setVisible={setAddModalVisible} />
      <ButtonWrapper>
        <Button onClick={() => setAddModalVisible(true)}>Add new todo</Button>
      </ButtonWrapper>
    </div>
  )
};
