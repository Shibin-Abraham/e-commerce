import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import View from './components/ViewMore/View';
import Login from './components/Login/Login';
import SigUp from './components/SignUp/SigUp';


function App() {


  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/view' element={<View />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SigUp />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
