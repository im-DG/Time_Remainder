import React from 'react'
import { useNavigate } from 'react-router-dom'
function ModifyRemainder() {
    const navigator = useNavigate();

    return (
        <>
            <h2>Modify remainder</h2>
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
                    <label for="">Description</label>
                    <textarea name="" id="" cols="50" rows="10" placeholder="Enter your description"></textarea>
                </div>
                <div>
                    <label for="">Email address</label>
                    <input type="email" name="" id="" placeholder="enter your email" />
                </div>
                <div>
                    <label for="">Contact number:</label>
                    <input type="number" />
                </div>
                <div>
                    <label for="">Sms no:</label>
                    <input type="number" />
                </div>
                <div>
                    <label for="abc">Recur for next:</label>
                    <input type="checkbox" name="remainder" />7 days
                    <input type="checkbox" name="remainder" />5 days
                    <input type="checkbox" name="remainder" />3 days
                    <input type="checkbox" name="remainder" />1 days
                </div>
                <button onClick={() => navigator("/HomePage")}>Back</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => navigator("/Confirm")}>Confirm</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => navigator("/Logout")}>Logout</button>

            </form>
        </>
    )
}

export default ModifyRemainder
