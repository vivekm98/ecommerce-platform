import React, { useContext } from 'react'
import "../assets/css/header.css";
import Button from './Button';
import { Link,useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const logout =() =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/')
    
  }
  return (
    <>
      <nav className="navbar navbar-dark container-fluid p-3">
        <Link href="" className='navbar-brand fw-bold' to="/">E-Market</Link>
        <div className='d-flex gap-2'>
          {isLoggedIn ? (
            <>
              <button class='btn btn-danger'onClick={logout}>Logout</button>
            </>
          ):(
              <>
                <Button text="Login" class='btn btn-outline-light text-dark' url="/login" />

               <Button text="Register"class="btn btn-outline-light" url="/register" />
              </>
          )}
            
        </div>
      </nav>
    </>
  )
}

export default Header