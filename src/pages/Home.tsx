import { HomeLayout } from '../components/Home';
import BoxLayout from '../components/inprogress';
import TodoCardList from '../components/todo-card-list';
export function HomeView() {
  return (
    <>
      <HomeLayout>
        <BoxLayout status='Todo'>
          <TodoCardList completed={false} />
        </BoxLayout>
        <BoxLayout status='Completed'>
          <TodoCardList completed/>
        </BoxLayout>
      </HomeLayout>
    </>
  );
}
