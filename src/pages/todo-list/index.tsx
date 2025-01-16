import { useCallback, useEffect, useState } from 'react';
import { useTodo } from '../../context/todo';
import TodoListView from './view';
import { useAtom } from 'jotai';
import { todos as todoList1 } from '../../store/todo';
import { TodoType } from '../../types/todo';
export function TodoList() {
  const initialStatus = [{ id: '0', todo: 'Working', completed: false }];
  const [todos, setTodos] = useState<TodoType[]>(initialStatus);
  // Use contextAPI
  const { todos: todoList, removeTodo, toggleTodo } = useTodo();
  // Use Jotai Global State
  const [todosAtom, setTodosAtom] = useAtom(todoList1);

  const fetchData = useCallback(async () => {
    try {
      //   const response = await todoApi.fetchTodo();
      setTodos(todosAtom);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }, [todosAtom]);

  const handleToggleComplete = (id: string) => {
    toggleTodo(id);
    setTodosAtom((prevTodos) =>
      prevTodos.map((todo) => {
        // todoApi.update(id, todo);
        // if (todo.id === id) todoApi.update(id, { ...todo, completed: !todo.completed });
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const handleDelete = (id: string) => {
    removeTodo(id);
    setTodosAtom((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <TodoListView todos={todos} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
  );
}
