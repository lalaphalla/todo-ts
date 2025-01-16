import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import todoApi from '../api/todoApi';
import { todos } from '../store/todo';
export const useTodoHandler = () => {
  const [, setTodos] = useAtom(todos);

  const fetchAllData = useCallback(async () => {
    const response = await todoApi.fetchTodo();
    console.log(response.data.data, 'using hook');

    setTodos(response.data.data);
  }, [setTodos]);
  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
};


