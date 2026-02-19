import React, { useState } from 'react';
//import axios from 'axios'

const BreastCancer = ({onSubmit}) => {
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
        status: '',
      })

    const handleChange=(e) => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name]:value,
            
        })
    }

    const handleSub = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
        .then(response => response.json())
        .then(data => {
            alert('Prediction: ' + data.prediction);
        })
        .catch(error => {
            console.error('Error:', error);
        });
       // onSubmit(inputs);
    }
    return(
       <form name='breastcancer' onSubmit={handleSub} method='post'>

            <label htmlFor="age"><br />Age<br /></label>
            <input type="text" name='age' value={inputs.age} onChange={handleChange} />

            <label htmlFor="meno"><br />menopausal status (0= premenopausal, 1= postmenopausal):<br /></label>
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
    )
};
export default BreastCancer;