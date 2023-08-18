import React from "react";
import PropTypes from 'prop-types'
import Darkmode from "./Darkmode";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-primary" >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex " role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <button className="btn btn-warning mx-2 " type="submit">Search</button>

                    </div>
                    <Darkmode darkBtn={props.darkBtn} darkBtnStyle={props.darkBtnStyle} btnText={props.btnText} />
                </div>
            </nav>
        </div>

    );
}; export default Navbar;
Navbar.propTypes = {
    title: PropTypes.string
}