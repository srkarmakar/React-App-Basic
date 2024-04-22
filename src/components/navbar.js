import React from 'react';
import logo from '../logo.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'primary' ? 'dark' : 'primary'} font-weight-bold`} aria-current="page" to="/">{props.homeTitle}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'primary' ? 'dark' : 'primary'} font-weight-bold`} to="/about">{props.aboutTite}</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
                    <label className={`nav-link text-${props.theme === 'primary' ? 'dark' : 'primary'} font-weight-bold`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    homeTitle: PropTypes.string.isRequired,
    aboutTite: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    homeTitle: 'Add Home Title',
    aboutTite: 'Add About Title'
}