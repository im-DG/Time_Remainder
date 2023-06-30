import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewRemainder = () => {
    const navigator = useNavigate()
    const [formDataArray, setFormDataArray] = useState([]);

    useEffect(() => {
        // Retrieve the form data array from localStorage
        const storedFormDataArray = localStorage.getItem('formDataArray');

        if (storedFormDataArray) {
            // Parse the stored form data array as JSON
            const parsedFormDataArray = JSON.parse(storedFormDataArray);

            // Set the form data array in the component state
            setFormDataArray(parsedFormDataArray);
        }
    }, []);

    return (
        <div>
            {formDataArray.length > 0 ? (
                <div>
                    <h2>Form Submissions</h2>
                    {formDataArray.map((formData, index) => (
                        <div key={index}>
                            <h3>Form Submission {index + 1}</h3>
                            <p>Date: {formData.date}</p>
                            <p>Subject: {formData.subject}</p>
                            <p>Description: {formData.description}</p>
                            <p>Email: {formData.email}</p>
                            <p>Contact Number: {formData.contact}</p>
                            <p>SMS Number: {formData.smsNo}</p>
                            <p>Recur: {formData.recurr}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No form submissions yet.</p>
            )}

            <button type="button" onClick={() => navigator("/HomePage")}> Back</button>
        </div >
    );
};


export default ViewRemainder
