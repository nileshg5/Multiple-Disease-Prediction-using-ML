import React, { useState } from 'react';
import axios from 'axios';

const Parkinsons= () => {
    const [formData, setFormData] = useState({
        mdvpFoHz: '',
        mdvpFhiHz: '',
        mdvpFloHz: '',
        mdvpJitterPercent: '',
        mdvpJitterAbs: '',
        mdvpRAP: '',
        mdvpPPQ: '',
        jitterDDP: '',
        mdvpShimmer: '',
        mdvpShimmerdB: '',
        shimmerAPQ3: '',
        shimmerAPQ5: '',
        mdvpAPQ: '',
        shimmerDDA: '',
        nhr: '',
        hnr: '',
        rpde: '',
        dfa: '',
        spread1: '',
        spread2: '',
        d2: '',
        ppe: ''
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
            const response = await axios.post('http://localhost:5000/predict_parkinsons', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("There was an error making the prediction request!", error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mdvpFoHz"><br />MDVP:Fo(Hz):<br /></label>
            <input type="text" name="mdvpFoHz" value={formData.mdvpFoHz} onChange={handleChange} />
            <label htmlFor="mdvpFhiHz"><br />MDVP:Fhi(Hz):<br /></label>
            <input type="text" name="mdvpFhiHz" value={formData.mdvpFhiHz} onChange={handleChange} />
            <label htmlFor="mdvpFloHz"><br />MDVP:Flo(Hz):<br /></label>
            <input type="text" name="mdvpFloHz" value={formData.mdvpFloHz} onChange={handleChange} />
            <label htmlFor="mdvpJitterPercent"><br />MDVP:Jitter(%): <br /></label>
            <input type="text" name="mdvpJitterPercent" value={formData.mdvpJitterPercent} onChange={handleChange} />
            <label htmlFor="mdvpJitterAbs"><br />MDVP:Jitter(Abs): <br /></label>
            <input type="text" name="mdvpJitterAbs" value={formData.mdvpJitterAbs} onChange={handleChange} />
            <label htmlFor="mdvpRAP"><br />MDVP:RAP:<br /></label>
            <input type="text" name="mdvpRAP" value={formData.mdvpRAP} onChange={handleChange} />
            <label htmlFor="mdvpPPQ"><br />MDVP:PPQ : <br /></label>
            <input type="text" name="mdvpPPQ" value={formData.mdvpPPQ} onChange={handleChange} />
            <label htmlFor="jitterDDP"><br />Jitter:DDP: <br /></label>
            <input type="text" name="jitterDDP" value={formData.jitterDDP} onChange={handleChange} />
            <label htmlFor="mdvpShimmer"><br />MDVP:Shimmer: <br /></label>
            <input type="text" name="mdvpShimmer" value={formData.mdvpShimmer} onChange={handleChange} />
            <label htmlFor="mdvpShimmerdB"><br />MDVP:Shimmer(dB): <br /></label>
            <input type="text" name="mdvpShimmerdB" value={formData.mdvpShimmerdB} onChange={handleChange} />
            <label htmlFor="shimmerAPQ3"><br />Shimmer:APQ3: <br /></label>
            <input type="text" name="shimmerAPQ3" value={formData.shimmerAPQ3} onChange={handleChange} />
            <label htmlFor="shimmerAPQ5"><br />Shimmer:APQ5: <br /></label>
            <input type="text" name="shimmerAPQ5" value={formData.shimmerAPQ5} onChange={handleChange} />
            <label htmlFor="mdvpAPQ"><br />MDVP:APQ: <br /></label>
            <input type="text" name="mdvpAPQ" value={formData.mdvpAPQ} onChange={handleChange} />
            <label htmlFor="shimmerDDA"><br />Shimmer:DDA: <br /></label>
            <input type="text" name="shimmerDDA" value={formData.shimmerDDA} onChange={handleChange} />
            <label htmlFor="nhr"><br />NHR: <br /></label>
            <input type="text" name="nhr" value={formData.nhr} onChange={handleChange} />
            <label htmlFor="hnr"><br />HNR: <br /></label>
            <input type="text" name="hnr" value={formData.hnr} onChange={handleChange} />
            <label htmlFor="rpde"><br />RPDE: <br /></label>
            <input type="text" name="rpde" value={formData.rpde} onChange={handleChange} />
            <label htmlFor="dfa"><br />DFA: <br /></label>
            <input type="text" name="dfa" value={formData.dfa} onChange={handleChange} />
            <label htmlFor="spread1"><br />Spread1: <br /></label>
            <input type="text" name="spread1" value={formData.spread1} onChange={handleChange} />
            <label htmlFor="spread2"><br />Spread2: <br /></label>
            <input type="text" name="spread2" value={formData.spread2} onChange={handleChange} />
            <label htmlFor="d2"><br />D2: <br /></label>
            <input type="text" name="d2" value={formData.d2} onChange={handleChange} />
            <label htmlFor="ppe"><br />PPE: <br /></label>
            <input type="text" name="ppe" value={formData.ppe} onChange={handleChange} />
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
export default Parkinsons;