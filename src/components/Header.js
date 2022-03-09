import React from 'react';
import Logo from "../img/site-logo.svg";
import Cart from "../img/cart.svg";
import Search from "../img/search.svg"
import './Header.css';


function Header() {
  return (
    <div className='nav-bar'>

      <div className='nav-up'>

        <div className='nav-up-left'>
          <img src={Logo} />
        </div>

        <div className='nav-up-right'>

          <div className='login-register'>
            <a>Login</a>
            <p>|</p>
            <a>Register</a>
          </div>

          <div className='cart'>
            <a className='cart-link'>
              <img src={Cart} />
              <p>0</p>
              Cart
            </a>
          </div>

        </div>

      </div>

      <div className='nav-bottom'>

        <form action='#' method='post'>
          <input className="search-input" type='text' placeholder="What are you looking for..." />
          <button type='submit' className='submit-btn'> <img src={Search} /> Search</button>
          <button className='cancel-btn'>Cancel</button>
        </form>


      </div>

    </div>
  )
}

export default Header