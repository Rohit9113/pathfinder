import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactUs/ContactForm";
import Home from './components/Home';
import Academics from './components/Academics/Academics';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/Academics" element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
