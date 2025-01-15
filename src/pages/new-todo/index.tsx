import { useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';

import TodoView from './view';
import { TodoProps, useTodo } from '../../context/todo';

export function NewTodo() {
  const [randomTodo, setRandomTodo] = useState('');
  const { addTodo } = useTodo();
  const fetchData = async () => {
    try {
      const response = await todoApi.randomTodo();
      setRandomTodo(response.data.todo);
      console.log(response.data, 'random');
    } catch (error) {
      console.error('Error fetching bookmarked lessons:', error);
    }
  };

  const handleTodo = (newTodo: TodoProps) => {
    // console.log(newTodo);
    addTodo(newTodo);
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
