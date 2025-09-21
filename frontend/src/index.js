import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './lanading_page/Home/homePage';
import  About from "./lanading_page/about/aboutPage";
import  Pricing from "./lanading_page/pricing/pricingPage";
import  Product from "./lanading_page/product/producpage";
import  Signup from "./lanading_page/signup/signup";
import  Login from "./lanading_page/signup/login";
import Navbar from './lanading_page/Navbar';
import Footer from './lanading_page/Footer';
import Notfound from './lanading_page/nofound';
import Supportpage from './lanading_page/support/supportPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
       <Route path="/pricing" element={<Pricing/>}/>
       <Route path="/product" element={<Product/>}/>
       <Route path="/support" element={<Supportpage/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);