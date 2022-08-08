import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";


const Input = ({ setUser }) => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const [toggle, setToggle] = useState(false)

    function toggleMenu() {
        setToggle(!toggle)
    }



    if (toggle) {
        document.getElementById('signup').style.display = 'none'

    }
    // else {
    //     document.body.classList.remove('active-modal')
    // }




    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { fullName, email, password };
        const url = "http://localhost:3000/users";

        fetch (url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("new user added")
        })

        setUser({ fullName: fullName, email: email, password: password })
        navigate("/Home")
    }

    return (
        <div className='signup' id='signup' >
            <div className='overlay'>
                <section className='signup_inner'>
                    <FaTimes onClick={toggleMenu} />

                    <h1>Sign Up</h1>
                    <p>Learn on your own time on protekh</p>



                    <form className='signup_inner_banner' onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <p><input name='fullname' value={fullName} type='text' placeholder='Enter Full-Name' required onChange={(e) => setFullName(e.target.value)}></input></p>
                        <label>Email</label>
                        <p><input name='email' value={email} type='email' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)}></input></p>
                        <label>Password</label>
                        <p><input name='password' value={password} type='password' required placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}></input></p>
                        <br />
                        <button type='submit' className='btn'>Sign Up</button>
                    </form>



                    <div>

                        <div className='signup_footer'>
                            <p>Already on protekh?</p>
                            <Link to=''>Log In</Link>
                        </div>
                    </div>

                </section>
            </div>

        </div >

    )

}

export default Input