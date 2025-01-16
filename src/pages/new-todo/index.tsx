import { useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';

import TodoView from './view';
import { useTodo } from '../../context/todo';
import { TodoType } from '../../types/todo';
import { todos } from '../../store/todo';
import { useAtom } from 'jotai';

export function NewTodo() {
  const [randomTodo, setRandomTodo] = useState('');
  const { addTodo } = useTodo();
  const [, setTodosAtom] = useAtom(todos);
  const fetchData = async () => {
    try {
      const response = await todoApi.randomTodo();
      setRandomTodo(response.data.todo);
    } catch (error) {
      console.error('Error fetching bookmarked lessons:', error);
    }
  };

  const handleTodo = (newTodo: TodoType) => {
    addTodo(newTodo); 
    setTodosAtom((prevTodos) => [...prevTodos, newTodo]);
    // todoApi.addTodo(newTodo);
  };
  const fetchRandomTodo = () => {
    fetchData();
    return randomTodo;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <TodoView onCreate={handleTodo} handleRandomTodo={fetchRandomTodo} />;
}
