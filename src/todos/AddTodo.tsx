import { db } from '../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'components/Button';

const Modal = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => visible ? 'grid' : 'none'};
  place-content: center;
  background-color: #fafafa;
`;

const Form = styled.form`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;

interface AddTodoProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const AddTodo = ({ visible, setVisible }: AddTodoProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onClose = () => setVisible(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose();
    } catch (err) {
      alert(err)
    }
  };

  return (
    <Modal visible={visible}>
      <Form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <fieldset>
          <legend>Add todo</legend>
          <Input placeholder='title' onChange={(e) => setTitle(e.target.value)} />
          <Input placeholder='description' onChange={(e) => setDescription(e.target.value)} />
        </fieldset>
        <Button color='teal' onClick={handleSubmit}>Submit</Button>
        <Button color='salmon' onClick={onClose}>Cancel</Button>
      </Form>
    </Modal>
  )
};
