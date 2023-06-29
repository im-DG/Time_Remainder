import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ViewRemainder = () => {
    const navigator = useNavigate()
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        // Retrieve the form data from localStorage
        const storedData = localStorage.getItem('formData');

        if (storedData) {
            // Parse the stored data as JSON
            const parsedData = JSON.parse(storedData);

            // Set the form data in the component state
            setFormData(parsedData);
        }
    }, []);

    return (
        <div>
            {formData && (
                <div>
                    <h2>View Remainders</h2>
                    <p>Date: {formData.date}</p>
                    <p>Subject: {formData.subject}</p>
                    <p>Description: {formData.description}</p>
                    <p>Email: {formData.email}</p>
                    <p>Contact Number: {formData.contact}</p>
                    <p>SMS Number: {formData.smsNo}</p>
                    <p>Recur: {formData.recurr}</p>
                </div>
            )}
            <button type="button" onClick={() => navigator("/HomePage")}> Back</button>
        </div>
    );
};


export default ViewRemainder
