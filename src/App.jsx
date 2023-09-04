import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import Latest from "./components/Latest";
import Discount from "./components/Discount";
import Popular from "./components/Popular";
import Blog from "./components/Blog";
import Others from "./components/Others";
import Home from "./pages/Home";
import TrendingCategories from "./pages/TrendingCategories";
// import Cart from './components/Cart'
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<TrendingCategories />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
