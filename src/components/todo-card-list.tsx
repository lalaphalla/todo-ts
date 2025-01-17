import { Stack } from '@mui/material';
import TodoCard from './todo-card-detail';
import { TodoType } from '../types/todo';
// import { useSetAtom } from 'jotai';
import { DragStart, Drop } from '../types/drag';
// import { todos } from '../store/todo';

export interface TodoCardListProps extends DragStart, Drop {
  todos: TodoType[];
  completed: boolean;
}

export default function TodoCardList({
  todos,
  dragStartHandler,
  completed,
  dropHandler,
  dropOverHandler,
}: TodoCardListProps) {
  console.log(todos);
  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
        width={'100%'}
        onDrop={(event) => dropHandler(event, completed)}
        onDragOver={dropOverHandler}
      >
        {/* <Grid2 container spacing={2} sx={{ mt: 2 }}> */}
        {todos.map((todo: TodoType, id) => (
          <TodoCard
            id={todo.id}
            todo={todo.todo}
            completed={todo.completed}
            key={id}
            dragStartHandler={dragStartHandler}
          />
        ))}
      </Stack>
    </>
  );
}
