import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Login = () => {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    const userData ={
      username,password
    }
    
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)
      setIsLoggedIn(true)
      navigate('/dashboard')

    }catch(error){
      setError('Invalid credentials')
        
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <>
     <div className="container mt-5">
             <div className="row justify-content-center">
                 <div className="col-md-6 p-5">
                      <div className="border rounded p-4 shadow-sm">
                     <h3 className='text-center'>Login to E-Market</h3>
                     <form onSubmit={login} >
                         <input type="text" className='form-control mt-3' required placeholder='Username'value={username} onChange={(e) => setUserName(e.target.value)} />
                        
                         <input type="text" className='form-control mt-3' required placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                         {error && (
                          <div className='text-danger text-center mt-3'>{error}</div>
                         )}

                         {loading ? (
                             <button type='submit' className='btn btn-info d-block mx-auto mt-4'> <FontAwesomeIcon icon={faSpinner} spin /> Logging In...</button>
                         ):(
                             <button type='submit' className='btn btn-info d-block mx-auto mt-4'>Login</button>
                         )}
                        
                     </form>
                     </div>
                 </div>
             </div>
          </div>
    </>
  )
}

export default Login