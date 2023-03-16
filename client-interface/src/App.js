import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Homepage from "./pages/home/Homepage";


const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}


export default App;
