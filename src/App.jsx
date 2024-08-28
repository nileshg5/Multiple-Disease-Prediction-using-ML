import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Diabetes from './Diseases/Diabetes';
import HeartDisease from './Diseases/HeartDisease';
import BreastCancer from './Diseases/BreastCancer';
import Parkinsons from './Diseases/Parkinsons';
//import LungCancer from './Diseases/LungCancer';

import './App.css';
const App = () => {
  const handleSubmit = (inputs) => {
    console.log('Form submitted with inputs:', inputs);
    // Add your submission logic here
  };
  const [selectedOption, setSelectedOption] = useState('Diabetes Prediction');
  return (
    <>
    <div className='container'>
      <Sidebar selectedOption={selectedOption} setSelectedOption={setSelectedOption} /> 
      <div className="content">
         {selectedOption === 'Diabetes Prediction' && (
          <div>
            <h2>Diabetes Prediction</h2>
            <Diabetes />
          </div>
         )}
        {selectedOption === 'Heart Disease Prediction' && (
          <div>
            <h2>Heart Disease Prediction</h2>
            <HeartDisease />
          </div>
        )}
          {selectedOption === 'Breast Cancer Prediction' && (
            <div>
              <h2>Breast Cancer Prediction</h2>
              <BreastCancer />
              
            </div>
           )}
         {selectedOption === 'Parkinsons Disease Prediction' && (
          <div>
            <h2>Parkinsons Disease Prediction</h2>
            <Parkinsons/>
          </div>
         )}
         </div>
      </div>
    </>
  )
}
export default App