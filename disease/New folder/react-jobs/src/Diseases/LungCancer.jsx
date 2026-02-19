import React, { useState } from 'react';
const LungCancer = () => {
    return(
        <>
        <label htmlFor="gender"><br />Gender (M=male=0, F=female=1): <br /></label>
        <input type="text" name="" id="" />
            <label htmlFor="age"><br />Age<br /></label>
            <input type="text" />
            <label htmlFor="smoking"><br />Smoking (YES=1, NO=0): <br /></label>
            <input type="text" />
            <label htmlFor="yelowfingers"><br />Yellow Fingers(YES=1, NO=0): <br /></label>
            <input type="number" name="" id="" />
            <label htmlFor="anxiety"><br />Anxiety(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="Peer_pressure"><br />Peer Pressure(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="ChronicDisease:"><br />Chronic Disease(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="Fatigue"><br />Fatigue(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="Allergy"><br />Allerrgy(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="Wheezing"><br />Wheezing(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="Alcohol"><br />Alcohol(YES=1, NO=0): <br /></label>
            <input type="text" />
            <label htmlFor="Coughing"><br />Coughing(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="ShortnessofBreath"><br />Shortness of Breath(YES=1, NO=0): <br /></label>
            <input type="text" name="" id="" />
            <label htmlFor="SwallowingDifficulty"><br />Swallowing Difficulty (YES=1, NO=0): <br /></label>
            <input type="text" />
            <label htmlFor="ChestPain"><br />Chest Pain (YES=1, NO=0): <br /></label>
            <input type="text" />
            <br />
            <button type='submit'>Submit</button>

        </>
    )
};
export default LungCancer;