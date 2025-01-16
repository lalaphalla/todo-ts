import { useTodo } from '../context/todo';
import { Stack } from '@mui/material';
import TodoCard from './todo-card';
import { TodoType } from '../types/todo';
// import { DragEvent } from 'react';

type TodoCardListProps = {
  completed: boolean;
};

export default function TodoCardList({ completed }: TodoCardListProps) {
  const { todos: todoList } = useTodo();
  const todosFilter = todoList.filter((todo) => todo.completed === completed);

  // function dragOverHandler(event: DragEvent) {
  //   console.log('dropover')
  //   console.log(event.dataTransfer!.getData("text/plain"));
  //   if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      
  //     event.preventDefault();
  //     // const listEl = this.element.querySelector("ul")!;
  //     // listEl.classList.add("droppable");
  //   }
  // }
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
