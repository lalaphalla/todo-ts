import BoxLayout from '../components/box-layout';
import { HomeLayout } from '../components/Home';
import TodoCardList from '../components/todo-card-list';
export function HomeView() {
  return (
    <>
      <HomeLayout>
        <BoxLayout status="Todo">
          <TodoCardList completed={false} />
        </BoxLayout>
        <BoxLayout status="Completed">
          <TodoCardList completed />
        </BoxLayout>
      </HomeLayout>
    </>
  );
}
