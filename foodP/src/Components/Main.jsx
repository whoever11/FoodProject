import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import MealList from './MealList';

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} /> {/* Changed from /homepage to / */}
            <Route path="/MealList" element={<MealList />} />
        </Routes>
    );
}

export default Main;
