import React, { useState } from 'react';
import axios from 'axios';

const HeartDisease = () => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        testbps: '',
        cholesterol: '',
        fbs: '',
        restcg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict_heartdisease', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("There was an error making the prediction request!", error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="age"><br />Age:<br /></label>
            <input type="text" name="age" value={formData.age} onChange={handleChange} />
            <label htmlFor="sex"><br />Sex (0=Male, 1=Female): <br /></label>
            <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
            <label htmlFor="cp"><br />Constrictive Pericarditis: <br /></label>
            <input type="text" name="cp" value={formData.cp} onChange={handleChange} />
            <label htmlFor="testbps"><br />Test BPS: <br /></label>
            <input type="text" name="testbps" value={formData.testbps} onChange={handleChange} />
            <label htmlFor="cholesterol"><br />Cholesterol: <br /></label>
            <input type="text" name="cholesterol" value={formData.cholesterol} onChange={handleChange} />
            <label htmlFor="fbs"><br />Fasting Blood Sugar (0=No, 1=yes): <br /></label>
            <input type="text" name="fbs" value={formData.fbs} onChange={handleChange} />
            <label htmlFor="restcg"><br />Rest CG (0=Normal, 1=Abnormal): <br /></label>
            <input type="text" name="restcg" value={formData.restcg} onChange={handleChange} />
            <label htmlFor="thalach"><br />Thalach (Maximum heart rate achieved. 0=No, 1=Yes): <br /></label>
            <input type="text" name="thalach" value={formData.thalach} onChange={handleChange} />
            <label htmlFor="exang"><br />Exercise induced Angina (0=No, 1=Yes): <br /></label>
            <input type="text" name="exang" value={formData.exang} onChange={handleChange} />
            <label htmlFor="oldpeak"><br />Old Peak: <br /></label>
            <input type="text" name="oldpeak" value={formData.oldpeak} onChange={handleChange} />
            <label htmlFor="slope"><br />Slope: <br /></label>
            <input type="text" name="slope" value={formData.slope} onChange={handleChange} />
            <label htmlFor="ca"><br />CAD: <br /></label>
            <input type="text" name="ca" value={formData.ca} onChange={handleChange} />
            <label htmlFor="thal"><br />Thalassemia: <br /></label>
            <input type="text" name="thal" value={formData.thal} onChange={handleChange} />
            <br />
            <button type='submit'>Submit</button>
        </form>
        
        {prediction !== null && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0', border: '1px solid #00ff00' }}>
                    <p>Prediction: {prediction}</p>
        </div>
        )}
        </div>
    );
};
export default HeartDisease;