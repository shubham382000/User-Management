import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as userActions from '../../Redux/Users/Users.Actions'; 

let CreateUser = () => {

    let dispatch = useDispatch();

    let history = useNavigate();

    let [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    let updateInput = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    }

    let submitUser = (event) => {
        event.preventDefault(); 
        dispatch(userActions.createUser(user, history)); 
        console.log(user); 
    }


    return (
        <React.Fragment>

            {
                <React.Fragment>

                    {/* <pre>{JSON.stringify(user)}</pre> */}
                    <div className="container mt-4 animated fadeIn">
                        <div className="row">
                            <div className="col text-light create">
                                <p className="h3"><i className=" fa fa-cloud-download icons mx-1"></i>Create User</p>
                                <p className="lead para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium illum doloribus, molestias nobis voluptas maiores, non quae assumenda sed ratione, eaque earum!</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-sm-10 col-10 col-lg-5 m-auto">
                                <div className="card cards">
                                    <div className="card-header cards text-white">
                                        <p className="h4 fw-medium">Create New</p>
                                    </div>
                                    <div className="card-body bg-dark">
                                        <form onSubmit={submitUser}>
                                            <div className="form-group">
                                                <input
                                                    name="name"
                                                    value={user.name}
                                                    onChange={updateInput}
                                                    required type="text" className='form-control' placeholder='User Name' />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="email"
                                                    value={user.email}
                                                    onChange={updateInput}
                                                    required type="text" className='form-control' placeholder='Email' />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name="phone"
                                                    value={user.phone}
                                                    onChange={updateInput}
                                                    required type="number" className='form-control' placeholder=' Phone' />
                                            </div>
                                            <div>
                                                <input type="submit" className='btn btn-grad3 fw-bold text-light btn-sm' placeholder='User Name' value='Create' />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>

            }
            <div style={{ marginBottom: '150px' }} />


        </React.Fragment>
    )
}
export default CreateUser; 