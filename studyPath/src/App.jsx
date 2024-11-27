import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactUs/ContactForm";
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
