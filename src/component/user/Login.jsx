import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, loginUser } from '../../redux/actions/UserAction'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert =  useAlert()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = (n) => {
    n.preventDefault();
    dispatch(loginUser(email, password))
  }

  useEffect(() =>{
    if(error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if(isAuthenticated) {
      alert.success("Login successful!");
      navigate('/')
    }
  },[error , alert, dispatch ,isAuthenticated ,navigate])

  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mt-5 mb-4">Login</h1>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(n) => setEmail(n.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(n) => setPassword(n.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <div className="mt-3">
              <p>Already have an account? <Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login