import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import todoApi from '../api/todoApi';
import { TodoType } from '../types/todo';

type TodoProviderProps = {
  children: ReactNode;
};

type TodoContextType = {
  todos: TodoType[];
  addTodo: (newTodo: TodoType) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = createContext({} as TodoContextType);

// eslint-disable-next-line react-refresh/only-export-components
export function useTodo() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const fetchData = async () => {
    const response = await todoApi.fetchTodo();
    setTodos(response.data.data);
  };
  // Add a new todo to JSON Server
  function addTodo(newTodo: TodoType) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoApi.addTodo(newTodo);
  }

  // Toggle the completion status of a todo
  function toggleTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // todoApi.update(id, todo);
        if (todo.id === id) todoApi.update(id, { ...todo, completed: !todo.completed });
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  }

  // Remove a todo from JSON Server
  function removeTodo(id: string) {
    todoApi.delete(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  // Fetch todos from JSON Server on mount
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
