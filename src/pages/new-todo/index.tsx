import { useEffect, useState } from 'react';
import todoApi from '../../api/todoApi';

import TodoView from './view';
import { useTodo } from '../../context/todo';
import { TodoType } from '../../types/todo';

export function NewTodo() {
  const [randomTodo, setRandomTodo] = useState('');
  const { addTodo } = useTodo();
  // const [todos, setTodos] = useAtom(todos);
  const fetchData = async () => {
    try {
      const response = await todoApi.randomTodo();
      setRandomTodo(response.data.todo);
      console.log(response.data, 'random');
    } catch (error) {
      console.error('Error fetching bookmarked lessons:', error);
    }
  };

  const handleTodo = (newTodo: TodoType) => {
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
