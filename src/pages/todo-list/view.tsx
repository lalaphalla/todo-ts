// import { TodoList } from './index';

import TodoListComponent from '../../components/todo-list';
import { TodoProps } from '../../context/todo';


interface TodoListViewProps {
  todos: TodoProps[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}
export default function TodoListView({ todos, onDelete, onToggleComplete }: TodoListViewProps) {
  console.log(todos);

  return (
    <>
      <TodoListComponent todos={todos} onDelete={onDelete} onToggleComplete={onToggleComplete} />
    </>
  );
}
