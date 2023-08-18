import React, { useState, useEffect } from 'react';
import "../styles/syles.css";
import Popup from '../components/Popup'; // Import the Popup component
import ItemBox from '../components/ItemBox'; // Import the ItemBox component

// Define the Homepage component
const Homepage = () => {
  // State to hold categories and the selected category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories when the component mounts
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/categories');
        const data = await response.json();
        setCategories(data);
        console.log(data); // Log the fetched categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  // Function to open the popup with a selected category
  const openPopup = (category) => {
    setSelectedCategory(category);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedCategory(null);
  };

  // Render the component
  return (
    <div className="Home-contaiener">
      <div className="Home-heading-container">
        <h1 className='home-heading'>Chuck Norries</h1>
      </div>
      <div className="Home-content-container">
        {/* Map through categories and render ItemBox components */}
        {categories.map((item) => (
          <ItemBox key={item} category={item} onClick={() => openPopup(item)} />
        ))}
        {/* Display the Popup component if a category is selected */}
        {selectedCategory && (
          <div className="popup-container">
            <Popup category={selectedCategory} onClose={closePopup} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage; // Export the Homepage component
