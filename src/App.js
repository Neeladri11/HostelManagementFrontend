import React, { useState } from 'react';
import { BrowserRouter,Navigate, Route, Routes  } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Private from './auth/Private';
import SignUp from './pages/SignUp';

const App = () => {
  //const [adminParam,setAdminParam]=useState("");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
       <Route path="/dashboard/*" element={<Private><Dashboard /></Private>} /> 
      <Route path="/dashboard/*" element={<Dashboard />} />
      {/*<Route path="/login" element={<Login setAdminParam={setAdminParam}/>} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;