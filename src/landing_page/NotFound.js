import React from 'react';

function NotFound() {
    return ( 
        <div style={{
            backgroundColor: '#FEFBF3', 
            // height: '100vh', 
            // width: '100vw', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
        <div className= 'container p-5 mb-5'style={{backgroundColor :'#FEFBF3'}} >
            <div className= 'row text-center mt-5 ' style={{backgroundColor :'#FEFBF3'}}>
                <div className='col' style={{backgroundColor :'#FEFBF3'}}>
                
                <h1 className= 'mt-5 fs-2' style={{fontSize : "1.9rem"}}>404 Not Found</h1>
                <p className='mt-4 text-muted' style={{fontSize : "1.5rem"}}>Sorry, the page you are looking for does not exist</p>
                
                </div>

            </div>

        </div>
        </div>
     );
}

export default NotFound;