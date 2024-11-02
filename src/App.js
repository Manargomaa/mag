import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Navigation from "./Sections/Navigation/Navigation";
import About from "./Pages/About/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
