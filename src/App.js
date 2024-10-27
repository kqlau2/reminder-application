import React, { useEffect } from 'react'
import { BrowserRouter,Routes, Route,Navigate  } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DisplayPost from './components/DisplayPost';
import CreatePost from './components/CreatePost';

import './App.css';
import userpool from './userpool';

function App() {

  useEffect(()=>{
    let user=userpool.getCurrentUser();
      if(user){
        <Navigate to="/dashboard" replace />
      }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/reminder-application' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/displayPost" element={<DisplayPost/>}/>
        <Route path='/createPost' element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;