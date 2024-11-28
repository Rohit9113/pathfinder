import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactUs/ContactForm";
import Home from './components/Home';
import Academics from './components/Academics/Academics';
import Signin from './components/Users/Register';
import Login from './components/Users/Login';
import About from "./pages/About";
import FAQ from "./pages/FAQ";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
