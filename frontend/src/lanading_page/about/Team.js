import React from 'react';

function Team() {
    return (  
     <div className='container mt-5 p-5 border-top'>
        <div className='row p-5'>
            <h1 className='text-center '>People</h1>
            <div className ='col'>
                <img style={{width:"70%",height:"85%",borderRadius:"100%"}} src='/assests/ankush.jpg' alt='Img not load'></img>
                <h4 className='mt-4' style={{marginLeft:"100px"}}>Ankush Malik</h4>
            </div>
            <div className='col mt-5'>
                <p className=' mt-5'>I am passionate about technology and finance, and I love building projects that solve real-life problems.
Currently, I am working on a Zerodha Clone, where I am trying to replicate the powerful features of India’s biggest stock broker.</p>
<p>This project is helping me improve my web development and backend skills.
I believe in learning by doing, and this project is a big step in my journey.
Just like Zerodha breaks barriers in trading, I also aim to break barriers in my learning.
My goal is to become a skilled full-stack developer and contribute to impactful projects.
This is just the beginning of my coding journey, and many more projects are on the way</p>
            </div>
        </div>
     </div>
    );
}

export default Team;