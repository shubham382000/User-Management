import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import * as usersActions from '../../Redux/Users/Users.Actions';
import * as usersReducer from '../../Redux/Users/Users.Reducer';

let UserAdmin = () => {

    let dispatch = useDispatch();


    let userinfo = useSelector((state) => {
        return state[usersReducer.usersFeatureKey]
    });

    let { loading, users } = userinfo



    useEffect(() => {
        dispatch(usersActions.getAllUsers());
    }, []); 



    let deleteUser = (id) => {
        dispatch(usersActions.deleteUser(id));
    }


    return (
        <React.Fragment>

            <div className="container mt-3">
                <div className="row animated fadeIn ">
                    <div className="col text-light adminn">
                        <p className="h3 text-light"><i className=" fa fa-users-gear icons mx-1"></i>User Admin</p>
                        <p className='lead para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis expedita nisi minus vero iste nesciunt cum ea laudantium libero, officiis ipsum reiciendis!</p>
                        <Link to='/users/create' className='btn text-light btn-grad fw-medium btn-sm'>Create New</Link>
                    </div>
                </div>
                {
                    loading ?
                        <React.Fragment>
                            <div class="spinner-border text-dark m-auto d-block" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </React.Fragment> :

                        <div className="row mt-3">
                            <div className="col">
                                <table className='table table-responsive-sm table-hover text-center table-success table-striped animated fadeIn'>
                                    <thead className=' bg-dark text-white'>
                                        <tr>
                                            <th className='fw-bold'>Name</th>
                                            <th className='fw-bold'>Email</th>
                                            <th className='fw-bold'>Phone Number</th>
                                            <th className='fw-bold'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>                                     
                                        {
                                            users.length > 0 ?
                                                <React.Fragment>
                                                    {
                                                        users.map((user) => {
                                                            return (
                                                                <tr>
                                                                    <td className="fw-medium">{user.name}</td>
                                                                    <td className="fw-medium">{user.email}</td>
                                                                    <td className="fw-medium">{user.phone}</td>
                                                                    <td>
                                                                        <Link to={`/users/${user.id}`} className='btn btn-grad text-light btn-sm'>Update</Link>
                                                                        <button onClick={deleteUser.bind(this, user.id)} className='btn btn-grad2 btn-sm text-light'>Delete</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </React.Fragment> : <React.Fragment>
                                                    <tr className='bg-danger'>
                                                        <td colSpan={6} className='text-danger fw-bold'>-----------------------No Products Found------------------------</td>
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
export default UserAdmin; 