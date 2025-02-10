import React from 'react';
// import snehaImage from "../../landing_page/about/sneha.jpg"; 
import snehaImage from "./sneha.jpg";
import riyaImage from "./riya.jpg";
import ShubhraImage from "./shubhra.jpg";
import sakshiImage from "./sakshi1.jpg";



const About = () => {
    const teamMembers = [
      {
        name: "Sneha Yadav",
        image: snehaImage,
        // bio: "Leadership & Strategy"
      },
      {
        name: "Sakshi",
        image: sakshiImage,
        // bio: "Technology & Innovation"
      },
      {
        name: "Riya",
        image: riyaImage,
        // bio: "Operations & Growth"
      },
      {
        name: "Shubhra Sharma",
        image: ShubhraImage,
        // bio: "Product Development"
      }
    ];
    return ( 
      <div>
        <div style={{
            backgroundColor: '#FEFBF3', 
            // height: '100vh', 
            // width: '100vw', 
            display: 'flex', 

            // justifyContent: 'center', 
            // alignItems: 'center'
        }}>
          <div>
        <div className='container text-center p-5 mt-5 '  >
            <div className='row '>
                <div>
                    <h2 className='text-muted 'style={{fontSize :'1.9rem'}}>We're revolutionizing business finance with AI intelligence.<br />
                    Making enterprise security accessible for all.</h2>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center text center align-items-right '>
         <div className='row border-top p-5 mt-5 fs-6 text-left  text-muted ' style={{lineHeight:"1.8", fontSize:"1.2em" , width:'70%'}}>
             
             <div className='col-6 p-4 text center'>
                 <p>Welcome to NEXORA, where we revolutionize financial management for small businesses through AI. Founded to democratize financial intelligence, we understand the challenges business owners face in managing their finances securely.</p>
                 <p>Our platform emerged from a simple idea: every business deserves access to sophisticated financial tools. By combining AI technology with user-friendly design, we've created a solution that protects your financial interests and empowers informed decisions.</p>
                 <p>What sets us apart is our commitment to security and education. Our ML-powered systems safeguard your transactions while our Learning Centre ensures you have the knowledge to control your financial future. We believe financial literacy is a right, not a privilege.</p>
             </div>
             <div className='col-6 p-4'>
                <p>Our team of experts works continuously to evolve our platform, ensuring you have access to advanced tools for budgeting, forecasting, and business analysis. We measure our success by your growth, celebrating every milestone of our business partners.</p>
                <p> Join thousands of successful business owners who have transformed their financial management with NEXORA. Together, we're building a future where financial success is accessible and achievable for every business.</p>
                {/* <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{textDecoration:'none'}} href=''>blog</a> or see what the media is <a style={{textDecoration:'none'}} href=''>saying about us.</a></p> */}
                 
             </div>
             
             
         </div>
         
        </div>
          
        <div style={{ backgroundColor: '#FFFFFF', color: '#fff', padding: '10px 10px' }}>
            <div className="container text-center">
                <h2 className="mb-5" style={{ fontSize: '2rem', fontWeight: '600', letterSpacing: '2px' }}>TEAM</h2>

                <div className="row justify-content-center">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-md-3 col-sm-6 mb-4">
                            <div className="card bg-dark text-white border-0">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="card-img-top rounded-3" 
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{member.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
       </div>
       </div>
        
     );
};

export default About;