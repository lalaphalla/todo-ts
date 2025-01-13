import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoView from './pages/Todo/view';
import { Home } from './pages/Home';
import ResponsiveAppBar from './components/Navbar';
import { StoreView } from './pages/Store/view';


function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoView />} />
          <Route path="/store" element={<StoreView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
