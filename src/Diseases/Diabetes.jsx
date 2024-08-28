import React, { useState } from 'react';
import axios from 'axios';
const Diabetes = () => {
    const [inputs, setInputs] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigree: '',
        age: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict_diabetes', inputs);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="pregnancies"><br />Number of Pregnancies: <br /></label>
            <input type="text" name="pregnancies" value={inputs.pregnancies} onChange={handleChange} />
            <label htmlFor="glucose"><br />Glucose: <br /></label>
            <input type="text" name="glucose" value={inputs.glucose} onChange={handleChange} />
            <label htmlFor="bloodPressure"><br />Blood Pressure: <br /></label>
            <input type="text" name="bloodPressure" value={inputs.bloodPressure} onChange={handleChange} />
            <label htmlFor="skinThickness"><br />Skin Thickness: <br /></label>
            <input type="text" name="skinThickness" value={inputs.skinThickness} onChange={handleChange} />
            <label htmlFor="insulin"><br />Insulin: <br /></label>
            <input type="text" name="insulin" value={inputs.insulin} onChange={handleChange} />
            <label htmlFor="bmi"><br />BMI: <br /></label>
            <input type="text" name="bmi" value={inputs.bmi} onChange={handleChange} />
            <label htmlFor="diabetesPedigree"><br />Diabetes Pedigree: <br /></label>
            <input type="text" name="diabetesPedigree" value={inputs.diabetesPedigree} onChange={handleChange} />
            <label htmlFor="age"><br />Age: <br /></label>
            <input type="text" name="age" value={inputs.age} onChange={handleChange} />
            <br />  
            <button type="submit">Submit</button>
        </form>
        {prediction !== null && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0', border: '1px solid #00ff00' }}>
                    <p>Prediction: {prediction}</p>
        </div>
        )}

        </div>
    );
};

export default Diabetes;