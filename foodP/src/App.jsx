import React from 'react';
import Main from './Components/Main';
import Header from './Components/header';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Corrected spelling

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
};

export default App;


