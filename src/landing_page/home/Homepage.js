import React from 'react';
import EmailSignup from "./EmailSignup";
import testimonials from "./Data";
import Testimonials from "./Testimonials";

function Homepage() {
    return ( 
        <div className= 'container-fluid d-flex align-items-center justify-content-center p-5' style={{
            backgroundColor : '#FEFBF3'
            }}>
            <div className='row justify-content-center p-5 '>
                <div className=' text-center '>
                   <h1 className='mb-5' style={{fontSize : '4.2em'}}>Your Money, Your Move</h1>
                   <p className='text-muted ' style={{fontSize : '1.4em', backgroundColor:'rgb'}}> Why wait for the ‘right time’ when the best time is now? Investing isn’t just for <br />the wealthy—it’s for anyone who wants to break the cycle and build something bigger.</p>
                   {/* <p class='text-muted'>Start smart. Stay ahead. Make every rupee count.</p> */}
                   <EmailSignup />
                   {/* <OpenAccount /> */}
                   <Testimonials testimonials= {testimonials}  />
                   
                </div>
                
            </div>
        </div>
     );
}

export default Homepage;