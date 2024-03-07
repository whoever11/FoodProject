import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Meal Categories</h1>

      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <ul>
          {categories.map(category => (
            <li key={category.idCategory}>
              <h3>{category.strCategory}</h3>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
              <p>{category.strCategoryDescription}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryPage;
