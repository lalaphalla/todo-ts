// import { TodoList } from './index';

import TodoListComponent from '../../components/todo-list';
import { TodoType } from '../../types/todo';

interface TodoListViewProps {
  todos: TodoType[];
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}
export default function TodoListView({ todos, onDelete, onToggleComplete }: TodoListViewProps) {
  return (
    <>
      <TodoListComponent todos={todos} onDelete={onDelete} onToggleComplete={onToggleComplete} />
    </>
  );
}
