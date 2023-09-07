import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as usersActions from '../../Redux/Users/Users.Actions';
import * as usersReducer from '../../Redux/Users/Users.Reducer';
import { useNavigate } from "react-router-dom";

let UserList = () => {

    let history = useNavigate(); 

    let dispatch = useDispatch();

    let userinfo = useSelector((state) => {
        return state[usersReducer.usersFeatureKey]
    });

    let { loading, users } = userinfo


    useEffect(() => {
        dispatch(usersActions.getAllUsers());
    }, []); 

    let selectedUser = (user) => {
        history(`/users/details/${user.id}`)
    }

    return (
        <React.Fragment>

            <div className="container mt-3">
                <div className="row">
                    <div className="col text-light userlist">
                        <p className="h3"><i className=" fa fa-user-circle icons mx-2"></i>User List</p>
                        <p className="lead para">Click on the user row to know more detailed information about the user</p>
                    </div>
                </div>
                {
                    loading ?

                    // spinner loaded 

                        <React.Fragment>
                            <div class="spinner-border text-dark m-auto d-block" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </React.Fragment> :

                        <div className="row mt-2">
                            <div className="col">
                                <table className='table table-responsive-sm table-success table-hover text-center
                               table-striped animated fadeIn'>
                                    <thead className=' bg-amber text-white'>
                                        <tr>
                                            <th className='fw-bold'>Name</th>
                                            <th className='fw-bold'>Email</th>
                                            <th className='fw-bold'>Phone Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                         {/* <pre>{JSON.stringify(userinfo)}</pre> */}
                                        {
                                            users.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        users.map((user) => {
                                                            return (
                                                                <tr onClick={selectedUser.bind(this, user)}>
                                                                    <td className=" fw-medium">{user.name}</td>
                                                                    <td className=" fw-medium">{user.email}</td>
                                                                    <td className=" fw-medium">{user.phone}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : <React.Fragment>
                                                    <tr className='bg-danger'>
                                                        <td colSpan={6} className='text-info fw-bold'>-----------------------No Users Found------------------------</td>
                                                    </tr>
                                                </React.Fragment>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                }
            </div>
        </React.Fragment>
    )
}
export default UserList; 