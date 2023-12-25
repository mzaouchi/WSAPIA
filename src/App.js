import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home><h1>ABDELWAHEB</h1></Home>}/>
        <Route path='/ListUsers' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
        <Route path='/Profil/:id' element={<PrivateRoute auth={auth}><Profil/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
