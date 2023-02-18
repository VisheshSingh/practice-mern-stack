import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
//pages
import Home from './pages/Home';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
