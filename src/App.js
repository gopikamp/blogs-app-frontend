import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Add from './components/Add';
import Viewall from './components/Viewall';
import ViewMypost from './components/ViewMypost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/add' element={<Add />} />
          <Route path='/Viewall' element={<Viewall />} />
          <Route path='/Mypost' element={<ViewMypost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
