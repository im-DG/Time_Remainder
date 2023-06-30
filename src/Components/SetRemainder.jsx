import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SetRemainder = () => {
    const navigator = useNavigate()
    // Define state variables for form fields
    const [date, setDate] = useState('');
    const [subject, setSubject] = useState('none');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [smsNo, setSmsNo] = useState('');
    const [recurr, setRecurr] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            subject,
            description,
            email,
            contact,
            smsNo,
            recurr,
        };

        // Retrieve the existing form data array from localStorage
        const existingFormData = localStorage.getItem('formDataArray');

        let formDataArray = [];

        if (existingFormData) {
            // Parse the existing form data array from localStorage
            formDataArray = JSON.parse(existingFormData);
        }

        // Add the new form data to the array
        formDataArray.push(formData);

        // Store the updated form data array in localStorage
        localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

        setDate('');
        setSubject('none');
        setDescription('');
        setEmail('');
        setContact('');
        setSmsNo('');
        setRecurr('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Select a Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Subject</label>
                <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="none">none</option>
                    <option value="Get Up">Get Up</option>
                    <option value="Bathing">Bathing</option>
                    <option value="Ready for job">Ready for job</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Description</label>
                <textarea
                    cols="50"
                    rows="10"
                    placeholder="Enter your description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="">Email address</label>
                <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Contact number:</label>
                <input
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Sms no:</label>
                <input
                    type="number"
                    value={smsNo}
                    onChange={(e) => setSmsNo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="abc">Recur for next:</label>
                <input
                    type="checkbox"
                    name="remainder"
                    onChange={(e) => setRecurr(e.target.value)}
                />
                7 days
                <input
                    type="checkbox"
                    name="remainder"
                    onChange={(e) => setRecurr(e.target.value)}
                />
                5 days
                <input
                    type="checkbox"
                    name="remainder"
                    onChange={(e) => setRecurr(e.target.value)}
                />
                3 days
                <input
                    type="checkbox"
                    name="remainder"
                    onChange={(e) => setRecurr(e.target.value)}
                />
                1 day
            </div>
            <button type="button" onClick={() => navigator("/HomePage")}> Back</button>
            <button type="submit">Confirm</button>
            <button type="button" onClick={() => navigator("/")} >
                Logout
            </button>
        </form>
    );
};



export default SetRemainder
