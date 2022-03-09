import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';

function Home() {
  return (
    <div>
    <Header/>
    <Login />
    {/* <Register/> */}
    <Product />
    <Footer/>
    </div>
  )
}

export default Home