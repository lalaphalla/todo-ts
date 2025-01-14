import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type TodoProviderProps = {
  children: ReactNode;
};

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number, completed: boolean) => void;
  removeTodo: (id: number) => void;
};

const TodoContext = createContext({} as TodoContextType);

// eslint-disable-next-line react-refresh/only-export-components
export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const baseUrl = 'http://localhost:3000/todos'; // Replace with your JSON Server URL

  // Fetch todos from JSON Server on mount
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  // Add a new todo to JSON Server
  function addTodo(text: string) {
    const newTodo = { text, completed: false };
    axios
      .post(baseUrl, newTodo)
      .then((response) => setTodos((prevTodos) => [...prevTodos, response.data]))
      .catch((error) => console.error('Error adding todo:', error));
  }

  // Toggle the completion status of a todo
  function toggleTodo(id: number, completed: boolean) {
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
  function removeTodo(id: number) {
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error('Error removing todo:', error));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
