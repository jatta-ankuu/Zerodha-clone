import React from 'react';
import Hero from './Hero';
import Leftsection from './Leftsec';
import Rightsecton from './Rightsec';
import Universal from './Universe';
function Productpage() {
    return ( <>
    <Hero/>
    <Leftsection
    imgUrl="\assests\kite.png" 
    productName="Kite" 
    productDescription="Our ulta fast flagship trading platform with streaming market data, advance charts ,an elegant UI,and more,Enjoy the kite experience seamlessely on your Anroid and ios devices"
    tryDemo="" 
    googlePlay="" 
    appStore=""
    />
    <Rightsecton
     imgUrl="\assests\console.png" 
    productName="Console" 
    productDescription="The central deshboard for your Zerodha account.Gain insight of your trade and investment with in-depth reports and visualisation."
     tryDemo=""
    />
     <Leftsection
    imgUrl="\assests\coin.png" 
    productName="Coin" 
    productDescription="Buy direct mutual fund online,commision free, delivered direct to your demate account.Enjoy the investment experience in your Anroid and ios as well"
    tryDemo=""
    googlePlay="" 
    appStore=""
    />
     <Rightsecton
     imgUrl="\assests\kiteconnect.png" 
    productName="Kite Connect-APi" 
    productDescription="Build powerful trading platform and experience with your simple HTTPs/JSON APIs.If you are a startup, build your investment app and showcase it to our clientbase"
     tryDemo=""
     />
     <Leftsection
    imgUrl="\assests\varsity.png" 
    productName="Varsity Mobile" 
    productDescription="An easy to grasp, collection with stock market lessons with in-depth coverage and illustration. Content is broken down into bits-size cards to helps you learn on the go."
    tryDemo="" 
    googlePlay="" 
    appStore=""
    />
    <Universal/>
    
    </>
     );
}

export default Productpage;