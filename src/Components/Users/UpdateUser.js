import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as userActions from '../../Redux/Users/Users.Actions';
import * as userReducer from '../../Redux/Users/Users.Reducer';

let UpdateUser = () => {

    let id = useParams().id;
    let dispatch = useDispatch();
    let history = useNavigate();


    // get selected user from store 

    let userInfo = useSelector((state) => {
        return state[userReducer.usersFeatureKey]
    });

    let { selectedUser } = userInfo;



    useEffect(() => {
        dispatch(userActions.getUser(id));
    }, [id])



    let updateInput = (event) => {
        dispatch(userActions.updateFormInput(event.target.name, event.target.value));
    }


    let submitUser = (event) => {
        event.preventDefault();
        dispatch(userActions.updateUser(id, selectedUser, history));
    }

    return (
        <React.Fragment>
            {
                <React.Fragment>
                    <section className="p3">
                        <div className="container">
                            <div className="row">
                                <div className="col text-light update">
                                    <p className="h3 mt-4">Update User</p>
                                    <p className="lead para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae, repellendus provident est voluptates quaerat saepe ipsam, facilis aut doloribus voluptatem debitis? Eum quae earum quia sint hic sapiente ducimus?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container animated fadeIn mt-3">
                            <div className="row">
                                <div className="col-md-6 col-sm-10 col-10 col-lg-5 m-auto">
                                    {/* <pre>{JSON.stringify(selectedUser)}</pre> */}
                                    <div className="card cards">
                                        <div className="card-header text-white">
                                            <p className="h4">Update User</p>
                                        </div>
                                        <div className="card-body bg-dark">
                                            <form onSubmit={submitUser}>
                                                <div className="form-group">
                                                    <input
                                                        name="name"
                                                        onChange={updateInput}
                                                        value={selectedUser.name}
                                                        type="text"
                                                        required
                                                        className='form-control' placeholder='User Name' />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name="email"
                                                        value={selectedUser.email}
                                                        onChange={updateInput}
                                                        type="text"
                                                        required
                                                        className='form-control'
                                                        placeholder='Email' />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        name="phone"
                                                        onChange={updateInput}
                                                        value={selectedUser.phone}
                                                        required
                                                        type="text" className='form-control' placeholder=' Phone Number' />
                                                </div>
                                                <div>
                                                    <input type="submit" className='btn btn-grad3 fw-bold text-light btn-sm' placeholder='User Name' value='Update' />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{ marginBottom: '100px' }} />
                </React.Fragment>
            }

        </React.Fragment>
    )
}
export default UpdateUser; 