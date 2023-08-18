import React, { useState, useEffect } from 'react';
import '../styles/popup.css'; // Import the component's styles

// Define the Popup component
function Popup({ category, onClose }) {
  // State to hold category data and loading status
  const [categoryData, setCategoryData] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch category data when the component mounts or when the category changes
  useEffect(() => {
    async function fetchCategoryData() {
      setLoading(true); // Set loading to true when fetching starts

      try {
        // Fetch a random joke for the selected category
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const data = await response.json();
        setCategoryData(data.value);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }

      setLoading(false); // Set loading to false when fetching is done
    }

    fetchCategoryData();
  }, [category]);

  // Fetch the next joke for the same category
  const fetchNextJoke = async () => {
    setLoading(true); // Set loading to true when fetching starts

    try {
      // Fetch the next random joke for the selected category
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const data = await response.json();
      setCategoryData(data.value);
    } catch (error) {
      console.error('Error fetching next joke:', error);
    }

    setLoading(false); // Set loading to false when fetching is done
  };

  // Render the component
  return (
    <div className="popup-content">
      {/* Close button to close the popup */}
      <button className="close-button" onClick={onClose}>X</button>
      {/* Display the category heading */}
      <h2 className='popup-heading'>{category}</h2>
      {/* Display loading spinner or category data */}
      {loading ? (
        <div className="loading-spinner"></div> // Display loading spinner
      ) : (
        <p className='popup-data'>"{categoryData}"</p>
      )}
      {/* Button to fetch the next joke */}
      <button className="next-button" onClick={fetchNextJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Next Joke'}
      </button>
    </div>
  );
}

export default Popup; // Export the Popup component
