import React, { useRef } from 'react'
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom'
function LoginForm() {
    const navigation = useNavigate();
    const Username = useRef();
    const Password = useRef();
    const getUsername = localStorage.getItem("UsernameData")
    const getPassword = localStorage.getItem("PasswordData")
    const handleSubmit = () => {
        if (Username.current.value == "abcd" && Password.current.value == "12345") {
            localStorage.setItem("UsernameData", "abcd")
            localStorage.setItem("PasswordData", "12345")
        }

    }
    return (
        <>
            {getUsername && getPassword ? <HomePage /> :

                <form className='form' onSubmit={handleSubmit}>
                    <label>Usarename: </label>
                    <input type='text' placeholder='Enter your Username' ref={Username} />
                    <br />
                    <br />
                    <label>Password: </label>
                    <input type='password' placeholder='Enter your Password' ref={Password} />
                    <br />
                    <button id='login_btn'>Login</button>
                    <button id='cancel_btn' onClick={() => navigation("./cancel")}>Cancel</button>

                </form>
            }

        </>
    )
}

export default LoginForm
