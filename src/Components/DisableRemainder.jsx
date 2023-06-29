import React from 'react'
import { useNavigate } from 'react-router-dom'
function DisableRemainder() {
    const navigator = useNavigate()
    return (
        <div>
            <h2>Disable remainder</h2>
            <form action="">
                <div>
                    <label for="">Select a Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label for="">Subject</label>
                    <select name="" id="">
                        <option value="">none</option>
                        <option value="">Get Up</option>
                        <option value="">Bathing</option>
                        <option value="">Ready for job </option>
                    </select>
                </div>
                <div>
                    <label>Reminders:</label>
                    <select name="" id="">
                        <option value="">none</option>
                        <option value="">Get Up</option>
                        <option value="">Bathing</option>
                        <option value="">Ready for job </option>
                    </select>
                </div>
                <div>
                    <label for="">Description</label>
                    <textarea name="" id="" cols="50" rows="10" placeholder="Enter your description"></textarea>
                </div>
                <button onClick={() => navigator("/HomePage")}>Back</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => navigator("/Confirm")}>Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => navigator("/Logout")}>Logout</button>
            </form>
        </div>
    )
}

export default DisableRemainder
