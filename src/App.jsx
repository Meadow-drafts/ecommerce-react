import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Trending from './components/Trending'
import Latest from './components/Latest'
import Discount from './components/Discount'
import Popular from './components/Popular'
import Blog from './components/Blog'
import Others from './components/Others'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Trending/>
    <Latest/>
    <Discount/>
    <Popular/>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
      <Blog/>
    <Others/>  
    <Footer/>  
    </>
  )
}

export default App
