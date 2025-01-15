import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import todoApi from '../api/todoApi';
import { todos } from '../store/todo';
const useTodoHandler = () => {
  const [, setTodos] = useAtom(todos);

  const fetchAllData = useCallback(async () => {
    const response = await todoApi.fetchTodo();
    console.log(response, 'using hook');

    setTodos(response.data);
  }, [setTodos]);
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
};

export default useTodoHandler;
