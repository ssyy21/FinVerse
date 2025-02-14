import React from "react";
import { Link } from "react-router-dom";
import Finverse from "./Finverse.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer () {
    return ( 
        <footer className='border-top' style={{backgroundColor:'#2973B2', color: 'white'}}>
        <div className='container  p-4' style={{backgroundColor:'#2973B2'}} >
            <div className='row mt-2'>
                <div className='col '>
                    <Link to='/Homepage'>
                <img  class = 'mr-3 ' src={Finverse} alt="Logo" style={{width : '50%', marginRight : '3'}}/>
                {/* <img src='media/images/logo1.png' style={{width:'50%'}} alt='logo' /> */}
                </Link>
                </div>
                <div className='col mb-3'>
                    <p className="text-white fs-5"><strong>Links</strong></p>
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to ="/signin">Login </Link><br />
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/products'>Products </Link><br />
                    <Link className="mb-4 text-white" style={{textDecoration:'none'}} to="/TableauDashBoard">View Analytics</Link><br/>
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/About'>About </Link><br />
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/CreditScore'>Credit Score Calculator</Link><br />
                    
                   
                </div>
                <div className='col '>
                    <p className="fs-5"><strong>Address</strong></p>
                    <a className='mb-4 text-white' style={{textDecoration:'none'}} href=''>IGDTUW, New Delhi, India</a><br />

                    
                </div> 
                 <div className='col'>
                    <p className="fs-5"><strong>Accounts</strong></p>
                    <a style ={{width: '32%', height: '32%'}} > 
                    <i class="fa-brands fa-square-twitter"></i> </a>
                    <a><i class="fa-brands fa-square-instagram"></i> </a>
                    <a > <i class="fa-brands fa-linkedin"></i></a><br />
                  
                </div> 

                <div class="footer-thank-you">
                <p className=' text-center mt-3'>&copy; 2025, FINVERSE Ltd. All rights reserved.</p>
        <p className='text-center mt-3'>Thank you for visiting FINVERSE. We're committed to empowering your success.</p>
    </div>
                
           </div>
        </div>
        </footer>
     );
}

export default Footer;