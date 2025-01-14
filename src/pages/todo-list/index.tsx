import { useCallback, useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';
import { TodoProps, useTodo } from '../../context/todo';
import TodoListView from './view';

export function TodoList() {
  const initialStatus = [{ id: '0', todo: 'Working', completed: false }];
  const [todos, setTodos] = useState<TodoProps[]>(initialStatus);
  const { todos: todoList, removeTodo, toggleTodo } = useTodo();
  const fetchData = useCallback(async () => {
    try {
    //   const response = await todoApi.fetchTodo();
      setTodos(todoList);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }, [todoList]);

  const handleToggleComplete = (id: string) => {
    toggleTodo(id)
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) => {
    //     // todoApi.update(id, todo);
    //     if (todo.id === id) todoApi.update(id, { ...todo, completed: !todo.completed });
    //     return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    //   })
    // );
  };

  const handleDelete = (id: string) => {
    removeTodo(id);
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    // todoApi.delete(id);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <TodoListView todos={todos} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
  );
}
