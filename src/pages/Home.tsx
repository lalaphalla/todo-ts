import { HomeLayout } from '../components/Home';
import { TodoBoard } from './todo-board';
export function HomeView() {
  return (
    <>
      <HomeLayout>
        <TodoBoard />
      </HomeLayout>
    </>
  );
}
