import BoxLayout from '../../components/box-layout';
import TodoCardList from '../../components/todo-card-list';
import { DragStart, Drop } from '../../types/drag';
import { TodoType } from '../../types/todo';
// interface TodoBoardProps extends TodoCardListProps{
//     status: []
interface Props extends DragStart, Drop {
  todos: TodoType[];}

export function TodoBoardView({ todos, dragStartHandler, dropHandler, dropOverHandler }: Props) {
  enum status {
    TODO = 'Todo',
    COMPLETED = 'Completed',
  }

  return (
    <>
      <BoxLayout status={status.TODO}>
        <TodoCardList
          todos={todos.filter((todo) => !todo.completed)}
          dragStartHandler={dragStartHandler}
          completed={false}
          dropHandler={dropHandler}
          dropOverHandler={dropOverHandler}
        />
      </BoxLayout>

      <BoxLayout status={status.COMPLETED}>
        <TodoCardList
          todos={todos.filter((todo) => todo.completed)}
          dragStartHandler={dragStartHandler}
          completed
          dropHandler={dropHandler}
          dropOverHandler={dropOverHandler}
        />
      </BoxLayout>
    </>
  );
}
