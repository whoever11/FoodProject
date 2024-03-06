import axios from 'axios';
import { useState,useEffect } from 'react';
import { BASE_URL } from '../globals'
import {  Link } from "react-router-dom";

export default function Categories (){
    const [categories, setCategories] = useState([]);
  
      useEffect(() => {
        const getApiCategories = async () => {
          const response = await axios.get(`${BASE_URL}/categories/`)
          setCategories(response.data.categories)
        }
  
        getApiCategories()
      }, [])

    return (
      <div className="category">
        <h2>List of Categories:</h2>
        {categories.map((category, key) => (
          <div key={key} className="card">
            <h3>
              <Link to={`/categories/${key}`}>{category.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  };