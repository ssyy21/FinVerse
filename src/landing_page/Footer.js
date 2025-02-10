import React from "react";
import { Link } from "react-router-dom";
function Footer () {
    return ( 
        <footer className='border-top' style={{backgroundColor:'#2973B2', color: 'white'}}>
        <div className='container  p-4' style={{backgroundColor:'#2973B2'}} >
            <div className='row mt-2'>
                <div className='col '>
                <img  class = 'mr-3 '  alt="Logo" style={{width : '70%', marginRight : '3'}}/>
                {/* <img src='media/images/logo1.png' style={{width:'50%'}} alt='logo' /> */}
                
                </div>
                <div className='col mb-3'>
                    <p className="text-white">Links</p>
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to ="/signin">SignUp </Link><br />
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/products'>Products </Link><br />
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/About'>About </Link><br />
                    <Link className='mb-4 text-white' style={{textDecoration:'none'}} to='/Homepage'>Learning Center </Link><br />
                    
                   
                </div>
                <div className='col'>
                    <p>Address</p>
                    <a className='mb-4 text-white' style={{textDecoration:'none'}} href=''>IGDTUW, New Delhi, India</a><br />

                    
                </div> 
                 <div className='col'>
                    <p>Account</p>
                    <a style ={{width: '32%', height: '32%'}} > <i 
                    class="fa-brands fa-square-twitter"></i> </a>
                    <a><i class="fa-brands fa-square-instagram"></i> </a>
                    <a > <i class="fa-brands fa-linkedin"></i></a><br />
                  
                </div> 

                <div class="footer-thank-you">
                <p className=' text-center mt-3'>&copy; 2025, FINVERSELtd. All rights reserved.</p>
        <p className='text-center mt-3'>Thank you for visiting FINVERSE. We're committed to empowering your success.</p>
    </div>
                
            </div>
            {/* <div className='mt-5 text-small text-muted' style={{fontSize:'12px'}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through<br />Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th<br />Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk<br />Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy<br />redressal of the grievances</p>
                <a href=''>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker /<br />depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL<br />every month.</p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the<br />day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same<br />process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to<br />authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of<br />others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href=''>create a ticket here.</a></p>
            </div> */}
            {/* <div className='row'>
                <div className='col'>
                
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>NSE </p>
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>BSE </p>
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>MCX </p>
                </div>
                <div className='col-auto text-muted' style={{fontSize:'12px'}}>
                <p>Terms & conditions</p>
                </div>
                <div className='col-auto text-muted' style={{fontSize:'12px'}}>
                <p>Policies & procedures</p>
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>Privacy policy</p>
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>Disclosure</p>
                </div>
                <div className='col-auto text-muted'style={{fontSize:'12px'}}>
                <p>For investor's attention</p>
                </div>
                <div className='col-auto text-muted text-left align-items-left'style={{fontSize:'12px'}}>
                <p>Investor charter</p>
                </div>
                <div className='col-3'>
                
                </div> */}
            {/* </div>
        </div> */}
        </div>
        </footer>
     );
}

export default Footer;