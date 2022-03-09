import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className='register'>

            <h6>Home &nbsp; {' > '} &nbsp; <span className='title'> Create new Account</span> </h6>
            <h1> Login or Create An Account</h1>

            <div className='register-container'>

                <h2>Persnol Information</h2>

                <hr/>

                <p>Please enter the following information to create your account.</p>

                <form className='register-form' action="#" method='post'>


                    <div className='persnol-info'>
                        <div className="persnol-info-input">
                            <label>First Name *</label>
                            <input type='text' required ></input>
                        </div>
                        <div className="persnol-info-input">
                            <label>Last Name *</label>
                            <input type='text' required></input>
                        </div>
                    </div>

                    <div className='form-address'>
                        <label>Email Address *</label>
                        <input type='email' required></input>
                    </div>

                    <h2>Login Information</h2>
                    <hr />

                    <div className='persnol-info'>
                        <div className="persnol-info-input">
                            <label>Password *</label>
                            <input type='password' required ></input>
                        </div>
                        <div className="persnol-info-input">
                            <label>Conform Password *</label>
                            <input type='password' required></input>
                        </div>
                    </div>

                    <button type='submit' className='btn-register'>Register</button>

                </form>

            </div>


        </div>
    )
}

export default Register