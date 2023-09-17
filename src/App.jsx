import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Categories from "./components/Category/Categories";
import TrendingCategories from "./pages/TrendingCategories";
import PopularCategories from "./pages/PopularCategories";
import Blog from "./pages/Blog";
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
          <Route path="/popular" element={<PopularCategories />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
