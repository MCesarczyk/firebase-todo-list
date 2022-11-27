import { useRef, useState } from "react";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from 'services/firebase';

import { FormComponent, Button } from "./styled";
import { TASK_TITLE_TRIMMED_LENGTH } from "todos/constants";
import { Input } from "components/Input";

export const Form = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [newTaskContent, setNewTaskContent] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!newTaskContent.trim().length) {
            return;
        }

        try {
            await addDoc(collection(db, 'tasks'), {
                title: newTaskContent.slice(0, TASK_TITLE_TRIMMED_LENGTH),
                description: newTaskContent,
                completed: false,
                created: Timestamp.now(),
            });

            setNewTaskContent("");
            inputRef.current?.focus();
        } catch (err) {
            alert(err);
        }
    };

    return (
        <FormComponent onSubmit={handleSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder={"Add new task"}
                onChange={({ target }) => setNewTaskContent(target.value)}
                autoFocus
            />
            <Button>Add task</Button>
        </FormComponent>
    )
};
