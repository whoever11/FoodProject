import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const SingleCategoryPage = () => {
  const [categoryDetails, setCategoryDetails] = useState({});
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        setCategoryDetails(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching category details:', error);
      }
    };

    fetchCategoryDetails();
  }, [categoryName]);

  return (
    <>
      <Link to="/categories">
        <button>Go Back</button>
      </Link>

      <div>
        <h1>{categoryDetails.strCategory}</h1>
        <img src={categoryDetails.strCategoryThumb} alt={categoryDetails.strCategory} />
        <p>{categoryDetails.strCategoryDescription}</p>
      </div>
    </>
  );
};

export default SingleCategoryPage;


