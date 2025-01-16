import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';
import { TodoType } from '../types/todo';

interface TodoFormProps {
  addRandomTodo: () => string;
  addTodo: (newTodo: TodoType) => void;
}

export function TodoForm({ addRandomTodo, addTodo }: TodoFormProps) {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(todoRef.current?.value);
    const newTodo: TodoType = {
      id: Date.now().toString(),
      todo: todoRef.current?.value || 'New Todo',
      completed: false,
    };
    addTodo(newTodo);
  };
  const handleRandomTodo = () => {
    todoRef.current!.value = addRandomTodo();
  };
  return (
    <Box pt={4} sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          //   value={todoText}
          //   onChange={handleInputChange}
          inputRef={todoRef}
          sx={{ marginBottom: 2 }}
        />
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Button variant="contained" color="primary" onClick={handleRandomTodo}>
            Random Todo
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Add Todo
          </Button>
        </Box>
      </form>
    </Box>
  );
}
