import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <h6>Home &nbsp; {' > '} &nbsp; <span className='title'> Login</span> </h6>
            <h1> Login or Create An Account</h1>

            <div className='login-container'>
                <div className='register lr'>
                    <h2>New Customer</h2>
                    <hr />
                    <p>Registration is free and easy.</p>
                    <div className='bullets'>
                        <ul>
                            <li>Faster Checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track orders and more</li>
                        </ul>
                        <button className='btn-new-account'>Create an Account</button>
                    </div>
                </div>

                <div className='user-login lr'>
                    <h2>Registered Customer</h2>
                    <hr />
                    <p>If you have an account with us, please logn.</p>
                    <div className='Login-form'>
                        <label >Email Address *</label>
                        <input type="text" />
                        <label >Password *</label>
                        <input type="text" />
                        <button className='btn-login'>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login