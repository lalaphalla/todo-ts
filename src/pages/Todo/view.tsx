import { TodoForm } from '../../components/todo-form';
import { TodoProps } from '../../context/todo';
import { TodoList } from '../todo-list';

interface TodoViewProps {
  handleRandomTodo: ()=> string;
  onCreate: (todo: TodoProps) => void;
}

export default function TodoView({ onCreate, handleRandomTodo }: TodoViewProps) {
  return (
    <>
      <TodoForm addRandomTodo={handleRandomTodo} addTodo={onCreate} />
      <TodoList />
    </>
  );
}
