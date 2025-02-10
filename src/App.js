import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Hero from "./landing_page/home/Homepage";
// import Testimonials from "./home/Testimonials";
// import testimonials from "./data";
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<Hero />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
      
     
      
      <Footer />
    </Router>
  );
}
