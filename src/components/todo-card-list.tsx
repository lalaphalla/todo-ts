import { useTodo } from '../context/todo';
import { Stack } from '@mui/material';
import TodoCard from './todo-card-detail';
import { TodoType } from '../types/todo';
import { DragEvent } from 'react';
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
  const { todos: todoList } = useTodo();
  const todosFilter = todoList.filter((todo) => todo.completed === completed);
  // const { toggleTodo } = useTodo();
  // const setTodo = useSetAtom(todos);
  console.log(todos);

  // function dragOverHandler(event: DragEvent) {
  //   if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
  //     event.preventDefault();
  //     // const listEl = this.element.querySelector("ul")!;
  //     // listEl.classList.add("droppable");
  //   }
  // }

  // function dropHandler(event: DragEvent) {
  //   const id = event.dataTransfer!.getData('text/plain');
  //   console.log(id);

  //   setTodo((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       // todoApi.update(id, todo);
  //       if (todo.id === id && todo.completed !== completed) {
  //         toggleTodo(id);
  //         // todoApi.update(id, { ...todo, completed: !todo.completed });
  //       }
  //       return todo.id === id && todo.completed !== completed
  //         ? { ...todo, completed: !todo.completed }
  //         : todo;
  //     })
  //   );
  // }
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
        {todosFilter.map((todo: TodoType, id) => (
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
