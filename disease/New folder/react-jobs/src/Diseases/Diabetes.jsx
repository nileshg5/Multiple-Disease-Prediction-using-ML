import React, { useState } from 'react';
const Diabetes = () => {
    return(
        <>
        <label htmlFor="preg"><br />Number of Pregnancies:<br /></label>
            <input type="number" />

            <label htmlFor="glucose"><br />Glucose:<br /></label>

            <input type="text" />
            <label htmlFor="bloodPressure"><br />Blood Pressure:<br /></label>

            <input type="text" />
            <label htmlFor="SkinThickness"><br />Skin Thickness<br /></label>
            <input type="text" />
            <label htmlFor="Insulin"><br />Insulin:<br /></label>
            <input type="text" />
            <label htmlFor="bmi"><br />BMI:<br /></label>
            <input type="text" />
            <label htmlFor="DiabetesPedigree"><br />Diabetes Pedigree<br /></label>
            <input type="text" />
            <label htmlFor="age"><br />Age<br /></label>
            <input type="text" />
            <br />
            <button type='submit'>Submit</button>

        </>
    )
};
export default Diabetes;