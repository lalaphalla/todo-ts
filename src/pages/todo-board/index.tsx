import { DragEvent } from 'react';
import { TodoBoardView } from './view';
import { useTodo } from '../../context/todo';
import { useAtom  } from 'jotai';
import { todos as TodoAtom } from '../../store/todo';

export function TodoBoard() {
  const { toggleTodo } = useTodo();

  // const { toggleTodo } = useTodo();
  const [todos, setTodos] = useAtom(TodoAtom);
  function onDragStart(event: DragEvent, id: string) {
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'move';
    console.log(`Dragging task with id: ${id}`);
  }
  function onDrop(event: DragEvent, completed: boolean) {
    const id = event.dataTransfer!.getData('text/plain');
    console.log(id);

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // todoApi.update(id, todo);
        if (todo.id === id && todo.completed !== completed) {
          toggleTodo(id);
          // todoApi.update(id, { ...todo, completed: !todo.completed });
        }
        return todo.id === id && todo.completed !== completed
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  }
  function onDropOver(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
    }
  }

  return (
    <TodoBoardView
      todos={todos}
      dragStartHandler={onDragStart}
      dropHandler={onDrop}
      dropOverHandler={onDropOver}
    />
  );
}
