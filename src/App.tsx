import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoView from './pages/todo/view';
import { Home } from './pages/Home';
import ResponsiveAppBar from './components/Navbar'; 
import { TodoDetailView } from './pages/todo-detail/view';


function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoView />} />
          <Route path="/todo/:id" element={<TodoDetailView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
