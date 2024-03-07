import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealList.css'; // Ensure this path is correct

const MealList = () => {
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => {
        setMealList(response.data.meals);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (selectedMeal) {
    return (
      <div className="box">
        <div className="card-info">
          <button className="back-button" onClick={() => setSelectedMeal(null)}>Back to list</button>
          <div className="text-wrapper">{selectedMeal.strMeal}</div>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="image" />
          <div className="div">{selectedMeal.strCategory} - {selectedMeal.strArea}</div>
          <div className="text-wrapper-2">{selectedMeal.strInstructions}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="ingredients-page">
    <div className="overlap-wrapper">
      {mealList.map((meal, index) => (
        <div key={meal.idMeal} className={`group group-${index % 12 + 1}`} onClick={() => setSelectedMeal(meal)}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="image" />
          <div className="text-wrapper">{meal.strMeal}</div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default MealList;



