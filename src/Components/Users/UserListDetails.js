import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../Redux/Users/Users.Actions';
import * as userReducer from '../../Redux/Users/Users.Reducer';

let UserListDetails = () => {

    let dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(userActions.getUser(id));
    }, [id]);

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey]
    });

    let { selectedUser } = userInfo;

    return (

        <React.Fragment>

            <div className="container mt-3">
                <div className="row">
                    <div className="col col-md-12">
                        {
                            <React.Fragment>

                                <p className="h3 text-light">User Details</p>
                                <div className="card  btn-grad3 mt-5">
                                    <div className="card-header">
                                        <p className="h5"></p>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-9 col-sm-12 m-auto bg-info-subtle">
                                                <ul className="list-group text-left mt-2">
                                                    <li className="list-group-item">
                                                        NAME : <span>{selectedUser.name}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        EMAIL : <span>{selectedUser.email}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        USERNAME : <span>{selectedUser.username}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        WEBSITE : <span>{selectedUser.website}</span>
                                                    </li>
                                                </ul>
                                                <Link to='/users/list'><button className="btn btn-dark mt-3 fw-bold btn-sm">Back</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </React.Fragment>
                        }
                        <div style={{marginBottom : '100px'}}></div>
                        {/* <pre>{JSON.stringify(selectedemployee)}</pre> */}
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}
export default UserListDetails; 