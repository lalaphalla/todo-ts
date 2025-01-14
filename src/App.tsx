import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoView from './pages/todo/view';
import { HomeView } from './pages/Home';
import ResponsiveAppBar from './components/Navbar';
import { TodoDetailView } from './pages/todo-detail/view';
// import TodoListView from './pages/todo-list/view';
import { TodoList } from './pages/todo-list';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/todo" element={<TodoView />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetailView />} />
      </Routes>
    </>
  );
}

export default App;
