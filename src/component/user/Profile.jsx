import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  const user = {
    name: 'Harry Potter',
    email: 'hp@gmail.com',
    profilePic: '../../../public/images/favicon.webp', // Placeholder image URL
  };
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mt-5 mb-4">
              <img src={user.profilePic} alt="Profile" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
              <h1 className="mt-3">{user.name}</h1>
              <p className="lead">{user.email}</p>
            </div>
            <div className="text-center">
              <Link to="/update-profile" className="btn btn-primary mr-3">Update Profile</Link>
              <Link to="/change-password" className="btn btn-secondary">Change Password</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile