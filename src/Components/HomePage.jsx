import React from 'react'
import { NavLink } from 'react-router-dom'
function HomePage() {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }
    const date = Date();
    return (
        <>
            <h1>Welcome to Reminder Application </h1>
            <h2>Today is </h2>
            <NavLink to='/SetRemainder' > <h2>SetRemainder</h2></NavLink> <br />
            <NavLink to='/ModifyRemainder' ><h2>ModifyReminder</h2></NavLink><br />
            <NavLink to='/DeleteRemainder' ><h2>DeleteRemainder</h2></NavLink><br />
            <NavLink to='/DisableRemainder'><h2>DisableReminder</h2></NavLink><br />
            <NavLink to='/ViewRemainder'  ><h2>ViewRemainder</h2></NavLink>

            <button onClick={() => handleClick()}>Logout</button>


        </>
    )
}


export default HomePage
