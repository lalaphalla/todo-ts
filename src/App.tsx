import { Route, Routes } from 'react-router-dom';
// import TodoView from './pages/todo/view';
import { HomeView } from './pages/Home';
import ResponsiveAppBar from './components/Navbar';
// import TodoListView from './pages/todo-list/view';
import { TodoList } from './pages/todo-list';
import { useTodoHandler } from './hooks/use-todo';
import { NewTodo } from './pages/new-todo';

function App() {
  useTodoHandler();
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/todo" element={<NewTodo />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
