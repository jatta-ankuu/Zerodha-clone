import React from 'react';
import Hero from './Hero';
import Award from "./Awards";
import Pricing from './Pricing';
import Stats from './stats';
import Education from './Education';
import OpenAccount from '../openAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
 
function HomePage() {
    return ( <>
    <div>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </div>
    </> );
}

export default HomePage;