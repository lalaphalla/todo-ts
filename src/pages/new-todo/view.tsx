import { TodoForm } from '../../components/todo-form';
import { TodoProps } from '../../context/todo';
import { TodoList } from '../todo-list';

interface NewTodoViewProps {
  handleRandomTodo: ()=> string;
  onCreate: (todo: TodoProps) => void;
}

export default function NewTodoView({ onCreate, handleRandomTodo }: NewTodoViewProps) {
  return (
    <>
      <TodoForm addRandomTodo={handleRandomTodo} addTodo={onCreate} />
      <TodoList />
    </>
  );
}
