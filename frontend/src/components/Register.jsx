import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({})
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)
    const register = async (e) => {
        e.preventDefault()
        setLoading(true)
        const userData = {
            username,email,password
        }
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
            console.log(response.data)
            console.log('success')
            setError({})
            setSuccess(true)

        }catch(error){
            setError(error.response.data)
            console.error("Registration error :",error.response.data)

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
                <h3 className='text-center'>Create an Account</h3>
                <form onSubmit={register}>
                    <input type="text" className='form-control mt-3' placeholder='Username'value={username} onChange={(e) => setUserName(e.target.value)} />
                    {error.username && (
                       <small className="text-danger mt-1">{error.username}</small>
                    )}
                    <input type="email" className='form-control mt-3' required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    {error.email && (
                        <small className='text-danger'>{error.email} </small>
                    )}
                    <input type="text" className='form-control mt-3' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {error.password && (
                        <small className='text-danger'>{error.password} </small>
                    )}
                    {success && (
                       <div className='text-success mt-3 text-center'>Registration Successfull</div>
                    )}
                    {loading ? (
                        <button type='submit' className='btn btn-info d-block mx-auto mt-4'> <FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>
                    ):(
                        <button type='submit' className='btn btn-info d-block mx-auto mt-4'>Register</button>
                    )}
                   
                </form>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Register