import React from "react";
import { Link } from 'react-router-dom';

let Navbar = () => {

    return (
        <React.Fragment>


            <nav className="navbar navbar-dark navbar-collapse navbar-expand-sm" style={{ backgroundColor: '#0c201b' }}>
                <div className="container">
                    <Link to='/' className="navbar-brand"><i className=" fa fa-user-gear icons"></i> UserHandle</Link>
                    <div className="collapse navbar-collapse ml-5">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className=" nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/users/list' className=" nav-link">Users</Link>
                            </li>
                        </ul>
                        <ul className=" navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/users/admin' className=" nav-link">Admin</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Button trigger */}

                    <Link to='' className="mobile-toggler d-sm-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className=" fa-solid fa-bars text-white "></i>
                    </Link>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <Link to='/' className="navbar-brand text-light"><i className=" fa fa-user-gear icons mx-2"></i>UserHandle</Link>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa fa-xmark mt-2"></i></button>
                                </div>
                                <div class="modal-body mt-2">
                                    <div className="modal-line" data-bs-dismiss="modal" aria-label="Close">
                                        <Link to='/' className="nav-link"> <i className="fa fa-home text-light"></i> Home</Link>
                                    </div>
                                    <div className="modal-line" data-bs-dismiss="modal" aria-label="Close">
                                        <Link to='/users/list' className="nav-link"> <i className="fa fa-user-check text-light"></i> Users</Link>
                                    </div>
                                    <div className="modal-line" data-bs-dismiss="modal" aria-label="Close">
                                        <Link to='/users/admin' className="nav-link"> <i className="fa fa-user-gear text-light"></i> Admin</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


        </React.Fragment>
    )
}
export default Navbar; 