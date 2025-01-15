import { useCallback, useEffect, useState } from 'react';
import { TodoProps, useTodo } from '../../context/todo';
import TodoListView from './view';
import { useAtomValue } from 'jotai';
import { todos as todoList1 } from '../../store/todo';
export function TodoList() {
  const initialStatus = [{ id: '0', todo: 'Working', completed: false }];
  const [todos, setTodos] = useState<TodoProps[]>(initialStatus);
  const { todos: todoList, removeTodo, toggleTodo } = useTodo();
  const todoList2 = useAtomValue(todoList1); // Access the todos state

  const fetchData = useCallback(async () => {
    try {
      //   const response = await todoApi.fetchTodo();
      console.log(todoList2);

      setTodos(todoList);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }, [todoList]);

  const handleToggleComplete = (id: string) => {
    toggleTodo(id);
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

  // const todoList1 = useAtomValue<TodoType>(todoLists)
  useEffect(() => {
    // console.log(todoLists);

    fetchData();
  }, [fetchData]);

  return (
    <TodoListView todos={todos} onDelete={handleDelete} onToggleComplete={handleToggleComplete} />
  );
}
