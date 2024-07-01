import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Profile() {
  const { user, loading } = useSelector(state => state.auth)
//   console.log(user)

  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mt-5 mb-4">
              <img src={user?.image?.url} alt="Profile" className="img-fluid rounded-circle" style={{ width: '150px', height: '150px' }} />
              <h1 className="mt-3">{user?.name}</h1>
              <p className="lead">{user?.email}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" data-toggle="modal" data-target="#updateProfile">Update Profile</button>
              <button className="btn btn-info ms-2" data-toggle="modal" data-target="#changePassword">Change Password</button>
            </div>
          </div>
        </div>
      </div>

    <div className="modal fade" id="updateProfile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Profile Update
                    </h1>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="/updateProfile" method="post" encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="">Name</label>
                            <input type="text" value={user?.name} name="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input type="email" value={user?.email} name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Image</label>
                            <input type="file" name="image" className="form-control"/>
                            <img src={user?.image?.url} alt="profile-image" width="50px"/>
                        </div>
                        <button type="submit" className="btn btn-success">Update Profile</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="changePassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Update Password
                    </h1>
                    <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="/changePassword" method="post">
                        <div className="mb-3">
                            <label htmlFor="">Old Password</label>
                            <input type="password" name="op" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">New Password</label>
                            <input type="password" name="np" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" name="cp" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile