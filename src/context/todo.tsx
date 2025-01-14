import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import todoApi from '../api/todoApi';

type TodoProviderProps = {
  children: ReactNode;
};

export type TodoProps = {
  id: string;
  todo: string;
  completed: boolean;
};

type TodoContextType = {
  todos: TodoProps[];
  addTodo: (newTodo: TodoProps) => void;
  toggleTodo: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = createContext({} as TodoContextType);

// eslint-disable-next-line react-refresh/only-export-components
export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const baseUrl = 'http://localhost:3000/todos'; // Replace with your JSON Server URL

  // Fetch todos from JSON Server on mount
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // Add a new todo to JSON Server
  function addTodo(newTodo: TodoProps) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoApi.addTodo(newTodo);
  }

  // Toggle the completion status of a todo
  function toggleTodo(id: string, completed: boolean) {
    axios
      .patch(`${baseUrl}/${id}`, { completed: !completed })
      .then(() =>
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        )
      )
      .catch((error) => console.error('Error toggling todo:', error));
  }

  // Remove a todo from JSON Server
  function removeTodo(id: string) {
    todoApi.delete(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    // axios
    //   .delete(`${baseUrl}/${id}`)
    //   .then(() => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)))
    //   .catch((error) => console.error('Error removing todo:', error));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
