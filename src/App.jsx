import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home'; 
import Login from './pages/Login'
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp/>}/>
     
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;