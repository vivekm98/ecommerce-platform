import React from 'react'
import "../assets/css/header.css";
import Button from './Button';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark container-fluid p-3">
        <Link href="" className='navbar-brand fw-bold' to="/">E-Market</Link>
        <div className='d-flex gap-2'>
            <Button text="Login" class='btn btn-outline-light text-dark' url="/login" />

            <Button text="Register"class="btn btn-outline-light" url="/register" />
        </div>
      </nav>
    </>
  )
}

export default Header