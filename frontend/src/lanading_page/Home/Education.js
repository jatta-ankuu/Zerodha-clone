import React from 'react';
function Education() {
    return ( 
       <div className='container p-3'>
        <div className='row p-5 '>
            <div className='col-5 mr-2'>
                <img style={{width:"80%"}} src='assests/education.svg' alt='Img not load'></img>
            </div>
            <div className='col-6 ml-2'>
                <h1 className='mb-4'>Free and open market Education</h1>
                <p >Varsity the latest market education book in the world covering everything from the basics to advance traning</p>
                <a style={{textDecoration:"none"}} href=''>Versity:-</a>
                <p className='mt-5'>Trading Q&A , the most active trading and investment community in india for all your market related queries</p>
                <a style={{textDecoration:"none"}} href=''>Trading Q&A:-</a>

            </div>
        </div>
       </div>
     )
}

export default Education;