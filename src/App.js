import logo from './logo.svg';
import './App.css';
import AddCard from './components/AddCard';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <div className="component">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="add-card" element={<AddCard />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
