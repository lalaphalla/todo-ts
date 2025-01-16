import { useTodo } from '../context/todo';
import { Grid2, Stack } from '@mui/material';
import TodoCard from './todo-card';
import { TodoType } from '../types/todo';

type TodoCardListProps = {
  completed: boolean;
};

export default function TodoCardList({ completed }: TodoCardListProps) {
  const { todos: todoList } = useTodo();
  console.log(todoList, 'todo card');
  const todosFilter = todoList.filter((todo) => todo.completed === completed);
  return (
    <>
      <Stack direction={'column'} spacing={2} width={'100%'}>
      {/* <Grid2 container spacing={2} sx={{ mt: 2 }}> */}
        {todosFilter.map((todo: TodoType, id) => (
          <TodoCard id={todo.id} todo={todo.todo} completed={todo.completed} key={id} />
        ))}
      </Stack>
    </>
  );
}
