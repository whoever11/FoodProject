import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
return (
    <div className="home-page">
        <div className="overlap-group-wrapper">
            <div className="overlap-group">
                <img className="image" alt="Image" src="https://wallpapers.com/images/hd/food-4k-m37wpodzrcbv5gvw.jpg" />
                <div className="text-wrapper">Drinks</div>
                <div className="div">home</div>
                <div className="text-wrapper-2">Category</div>
                <div className="text-wrapper-3">Meals</div>
                <div className="text-wrapper-4">Ingredients</div>
                <div className="welcome-to-MACK-meal">
                    Welcome <br />
                    To
                    <br />
                    MACK
                    <br />
                    Meal /Drinks
                    <br />
                    Api
                </div>
            </div>
        </div>
    </div>
);
};

export default HomePage;