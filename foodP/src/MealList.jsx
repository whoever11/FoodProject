import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MealList = () => {
  const [mealList, setMealList] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => {
        setMealList(response.data.meals);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [])

  return (
    <div className="meal-container">
      {!selectedMeal && (
        <div className="meal-list">
          {mealList.map(meal => (
            <div key={meal.idMeal} className="meal-item" onClick={() => setSelectedMeal(meal)}>
              <h3 className="meal-title">{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
            </div>
          ))}
        </div>
      )}

      {selectedMeal && (
        <div className="meal-detail">
          <button className="back-button" onClick={() => setSelectedMeal(null)}>Back to list</button>
          <h2 className="detail-title">{selectedMeal.strMeal}</h2>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="detail-image" />
          <h3 className="detail-category">Category: {selectedMeal.strCategory}</h3>
          <h3 className="detail-area">Cuisine: {selectedMeal.strArea}</h3>
          <p className="detail-instructions">{selectedMeal.strInstructions}</p>
          <ul className="ingredient-list">
            {Object.keys(selectedMeal).map((key) => {
              if (key.startsWith('strIngredient') && selectedMeal[key]) {
                return <li key={key} className="ingredient-item">{selectedMeal[key]} - {selectedMeal[`strMeasure${key.slice(13)}`]}</li>
              }
              return null
            })}
          </ul>
          <div className="detail-links">
            <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-link">Watch on YouTube</a>
            <a href={selectedMeal.strSource} target="_blank" rel="noopener noreferrer" className="source-link">Recipe Source</a>
          </div>
        </div>
      )}
    </div>
  )
}

export default MealList


