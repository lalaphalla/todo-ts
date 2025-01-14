// import { TodoList } from './index';

import TodoListComponent from '../../components/todo-list';

export interface TodoListProps {
  id: number;
  todo: string;
  completed: boolean;
}
interface TodoListViewProps {
  todos: TodoListProps[];
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}
export default function TodoListView({ todos, onDelete, onToggleComplete }: TodoListViewProps) {
  console.log(todos);

  return (
    <>
      <TodoListComponent todos={todos} onDelete={onDelete} onToggleComplete={onToggleComplete} />
    </>
  );
}
