import React from 'react'
import "../assets/css/header.css";
import Button from './Button';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark container-fluid p-3">
        <a href="" className='navbar-brand fw-bold'>E-Market</a>
        <div className='d-flex gap-2'>
            <Button text="Login" class='btn btn-outline-light text-dark' />

            <Button text="Register"class="btn btn-outline-light" />
        </div>
      </nav>
    </>
  )
}

export default Header