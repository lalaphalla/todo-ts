import { TodoForm } from '../../components/todo-form';
import { TodoType } from '../../types/todo';
import { TodoList } from '../todo-list';

interface NewTodoViewProps {
  handleRandomTodo: () => string;
  onCreate: (todo: TodoType) => void;
}

export default function NewTodoView({ onCreate, handleRandomTodo }: NewTodoViewProps) {
  return (
    <>
      <TodoForm addRandomTodo={handleRandomTodo} addTodo={onCreate} />
      <TodoList />
    </>
  );
}
