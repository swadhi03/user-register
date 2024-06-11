import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import LoginUser from './components/LoginUser';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddUser/>}/>
          <Route path='/view' element={<ViewAll/>}/>
          <Route path='/login' element={<LoginUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
