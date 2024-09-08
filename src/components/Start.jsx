import React, { useState, useEffect } from 'react';
import './StartPage.css';

function Start() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    // Fetch live data from the Flash API
    const fetchLiveData = async () => {
      try {
        const response = await fetch(''); // Replace with your Flash API endpoint
        const data = await response.json();
        setLiveData(data);
      } catch (error) {
        console.error('Error fetching live data:', error);
      }
    };

    fetchLiveData();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % liveData.length);
    }, 3000); // Change slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(slideInterval);
  }, [liveData]);

  return (
    <div className="slider">
      <div className="start-page">
        {liveData.length > 0 && (
          <div className="content">
            <h1 className="title">{liveData[currentSlide].username}</h1>
            <p className="description">{liveData[currentSlide].description}</p>
            <p className="date">{liveData[currentSlide].date}</p>
            <button className="learn-more-button">More Info</button>
          </div>
        )}
      </div>
      <button className="prev-slide" onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + liveData.length) % liveData.length)}>Previous</button>
      <button className="next-slide" onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % liveData.length)}>Next</button>
    </div>
  );
}

export default Start;
