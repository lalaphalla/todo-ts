import { useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';
import TodoListView, { TodoListProps } from './view';

export function TodoList() {
  const initialStatus = [{ id: 0, todo: 'Working', completed: false }];
  const [todos, setTodos] = useState<TodoListProps[]>(initialStatus);
  const fetchData = async () => {
    try {
      const response = await todoApi.fetchTodo();
      console.log('aa', response.data);

      setTodos(response.data);
      console.log('Bookmarked Lessons:', response.data);
    } catch (error) {
      console.error('Error fetching bookmarked lessons:', error);
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // todoApi.update(id, todo);
        if (todo.id === id) todoApi.update(id, { ...todo, completed: !todo.completed });
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    console.log(id);
    todoApi.delete(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TodoListView todos={todos} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
  );
}
