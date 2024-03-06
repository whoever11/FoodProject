import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
    const [category, setCategory] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getCategory = async () => {
          const categoryId = id === "0" ? 1 : parseInt(id) + 1;
            const response = await axios.get(`${BASE_URL}/categories/${categoryId}`);
            setCategory(response.data);
        };
        getCategory();
    }, [id]);

    return category ? (
        <div className="category-detail">
        <h2>Category: {category.strCategory}</h2>
        <img src={category.strCategoryThumb} alt={category.strCategories} className="thumb-image" />
        <p>Description: {category.strCategoryDescription}</p>
        <Link to="/categories">Return to category list</Link>
    </div>
) : (
    <h3>Loading category...</h3>
);
};
ß
export default CategoryPage;