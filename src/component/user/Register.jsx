import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mt-5 mb-4">Register</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
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