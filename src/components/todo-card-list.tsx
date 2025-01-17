import { useTodo } from '../context/todo';
import { Stack } from '@mui/material';
import TodoCard from './todo-card';
import { TodoType } from '../types/todo';
import { DragEvent } from 'react';
import { useSetAtom } from 'jotai';
import { todos } from '../store/todo';

type TodoCardListProps = {
  completed: boolean;
};

export default function TodoCardList({ completed }: TodoCardListProps) {
  const { todos: todoList } = useTodo();
  const todosFilter = todoList.filter((todo) => todo.completed === completed);
  const { toggleTodo } = useTodo();
  const setTodo = useSetAtom(todos);

  function dragOverHandler(event: DragEvent) {
    console.log('dropover');
    // event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      // const listEl = this.element.querySelector("ul")!;
      // listEl.classList.add("droppable");
    }
  }
  function dropHandler(event: DragEvent) {
    const id = event.dataTransfer!.getData('text/plain');
    console.log(event.dataTransfer?.getData('text/plain'));
    console.log(id);
    toggleTodo(id);
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        // todoApi.update(id, todo);
        // if (todo.id === id) todoApi.update(id, { ...todo, completed: !todo.completed });
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  }
  return (
    <>
      <Stack
        direction={'column'}
        spacing={2}
        width={'100%'}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
      >
        {/* <Grid2 container spacing={2} sx={{ mt: 2 }}> */}
        {todosFilter.map((todo: TodoType, id) => (
          <TodoCard id={todo.id} todo={todo.todo} completed={todo.completed} key={id} />
        ))}
      </Stack>
    </>
  );
}
