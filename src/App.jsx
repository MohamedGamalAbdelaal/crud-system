import React from 'react';
import AddUser from './pages/Add-User/AddUser';
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop1 from './pages/Desktop1/Desktop1';
import Desktop2 from './pages/Desktop2/Desktop2';
import { QueryClient } from 'react-query';

const App = () => {

  return <Router>
    <Routes>
      <Route index={true} element={<AddUser/>} />
      <Route path='/' element={<AddUser/>} />
      <Route path='/addUser' element={<AddUser/>} />
      <Route path='/desktop1' element={<Desktop1/>} />
      <Route path='/desktop2' element={<Desktop2/>} />
      
    </Routes>
  </Router>
}

export default App;
