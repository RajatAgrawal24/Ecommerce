import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, createUser } from '../../redux/actions/UserAction'
import { useAlert } from 'react-alert'

function Register() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate  = useNavigate()
  const {isAuthenticated , error} = useSelector((state) => state.auth)

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [image , setImage] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(name, email,password,confirmPassword ,image)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('confirmPassword', confirmPassword)
    formData.append('image', image)

    dispatch(createUser(formData))
  }

  useEffect(() =>{
    if(error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    if(isAuthenticated) {
      navigate('/login')
    }
  },[error , alert, dispatch ,isAuthenticated ,navigate])
  
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mt-5 mb-4">Register</h1>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter your name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required/>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required/>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image :</label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" id="image" required/>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div className="mt-3">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register