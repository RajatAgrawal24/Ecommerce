import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, updatePassword, clearErrors, resetUpdateProfile, resetUpdatePassword, loadUser } from '../../redux/actions/UserAction';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const { user, loading, error, isUpdated } = useSelector(state => state.auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitUpdateProfile = (e) => {
        e.preventDefault();

        const updateProfileData = new FormData();
        updateProfileData.append('name', name);
        updateProfileData.append('email', email);
        updateProfileData.append('image', image);

        dispatch(updateProfile(updateProfileData));
    };

    const submitUpdatePassword = (e) => {
        e.preventDefault();

        const updatePasswordData = {
            oldPassword,
            newPassword,
            confirmPassword
        };

        dispatch(updatePassword(updatePasswordData));
    };

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setImage(user?.image?.url);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Updated successfully');
            dispatch(resetUpdateProfile());
            dispatch(resetUpdatePassword());
            dispatch(loadUser()); // Refetch user data
        }
    }, [dispatch, error, user, isUpdated, alert]);

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
                            <form onSubmit={submitUpdateProfile} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image">Image</label>
                                    <input type="file" onChange={(e) => setImage(e.target.files[0])} name="image" className="form-control" />
                                    <img src={user?.image?.url} alt="profile-image" width="50px" />
                                </div>
                                <button type="submit" className="btn btn-success">Update Profile</button>
                                <button type="button" className="btn btn-danger ms-2" data-dismiss="modal" aria-label="Close">Close</button>
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
                            <form onSubmit={submitUpdatePassword}>
                                <div className="mb-3">
                                    <label htmlFor="oldPassword">Old Password</label>
                                    <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} name="oldPassword" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="newPassword">New Password</label>
                                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} name="newPassword" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-success">Update Password</button>
                                <button type="button" className="btn btn-danger ms-2" data-dismiss="modal" aria-label="Close">Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
