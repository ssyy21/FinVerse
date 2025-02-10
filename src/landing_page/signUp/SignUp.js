import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();
    
  return (
    <div className="signup-container" style={{backgroundColor : '#FEFBF3' }}>
      <div className="signup-wrapper">
        <h1 className="signup-title">Sign up</h1>
        
        <div className="signup-form">
          <div className="name-fields">
            <div className="input-group">
              <label className="input-label">
                First name
              </label>
              <input
                type="text"
                placeholder="Your first name"
                className="input-field"
              />
            </div>
            
            <div className="input-group">
              <label className="input-label">
                Last name
              </label>
              <input
                type="text"
                placeholder="Your last name"
                className="input-field"
              />
            </div>
          </div>
          
          <div className="input-group">
            <label className="input-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="input-field"
            />
          </div>
          
          <button className="continue-button">
            Continue
          </button>
          
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">
              <span>OR</span>
            </div>
          </div>
          
          <button className="google-button">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
              className="google-icon"
            />
            Continue with Google
          </button>
          
          <p className="signin-text">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/signin')}
              className="signin-link"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}