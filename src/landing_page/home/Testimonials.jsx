import React, { useState } from "react";
import './Testimonials.css';

const Testimonials = ({testimonials}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
      <div className='p-5 mt-5'>
      <h2 className="fs-2">Why users love Finverse</h2>

      <div className="testimonial-card">
        <div className="testimonial-content">
          <div className="image-container">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="profile-image"
            />
          </div>
          <div className="text-content">
            <div className="author-info">
              <h3>{testimonials[currentSlide].name}</h3>
              <p>{testimonials[currentSlide].profession}</p>
            </div>
            <blockquote>"{testimonials[currentSlide].text}"</blockquote>
          </div>
        </div>
      </div>

      <div className="controls">
        <button
          onClick={prevSlide}
          className="nav-button"
          aria-label="Previous testimonial"
        >
          <svg className="arrow-icon" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="nav-button"
          aria-label="Next testimonial"
        >
          <svg className="arrow-icon" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      </div>
    
  );
}

export default Testimonials;