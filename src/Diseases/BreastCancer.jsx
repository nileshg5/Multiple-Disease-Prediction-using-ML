import React, { useState } from 'react';
import axios from 'axios'

const BreastCancer = () => {
    const [inputs, setInputs] = useState({
        age: '',
        meno: '',
        size: '',
        grade: '',
        nodes: '',
        pgr: '',
        er: '',
        hormon: '',
        rfstime: '',
      })

      const [prediction, setPrediction] = useState(null);


    const handleChange=(e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
            
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict_breastcancer', inputs);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("There was an error making the prediction request!", error);
        }
    };

    return(
        <>
       <form name='breastcancer' onSubmit={handleSubmit} >

            <label htmlFor="age"><br />Age<br /></label>
            <input type="text" name='age' value={inputs.age} onChange={handleChange} />

            <label htmlFor="meno"><br />Menopausal status (0= premenopausal, 1= postmenopausal):<br /></label>
            <input type="text" name='meno' value={inputs.meno} onChange={handleChange}/>

            <label htmlFor="size"><br />Tumor Size:<br /></label>
            <input type="text" name='size' value={inputs.size} onChange={handleChange}/>
            <label htmlFor="grade"><br />Tumor Grade<br /></label>
            <input type="text" name='grade' value={inputs.grade} onChange={handleChange}/>
            <label htmlFor="nodes"><br />Number Of Positive Lymph Nodes:<br /></label>
            <input type="text" name='nodes' value={inputs.nodes} onChange={handleChange}/>
            <label htmlFor="pgr"><br />Progesterone Receptors (fmol/l):<br /></label>
            <input type="text" name='pgr' value={inputs.pgr} onChange={handleChange}/>
            <label htmlFor="er"><br />Estrogen Receptors (fmol/l):<br /></label>
            <input type="text" name='er' value={inputs.er} onChange={handleChange}/>
            <label htmlFor="hormon"><br />Hormonal Therapy (0=no, 1-yes): <br /></label>
            <input type="text" name='hormon' value={inputs.hormon} onChange={handleChange}/>
            <label htmlFor="rfstime"><br />Recurrence Free Survival Time;days to first of recurrence, death or last follow-up: <br /></label>
            <input type="text" name='rfstime' value={inputs.rfstime} onChange={handleChange}/>
            <br />
            <button type='submit'>Submit</button>
            

        </form> 

        {prediction !== null && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e0ffe0', border: '1px solid #00ff00' }}>
                    <p>The prediction is: {prediction}</p>
                </div>
            )}
        </>
    )
};
export default BreastCancer;