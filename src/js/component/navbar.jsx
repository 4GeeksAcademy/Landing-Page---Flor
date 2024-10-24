import React from "react";

const Navbar = () => {
    return (
        // fixed-top
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success bg-opacity-50 fixed-top">
        <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootsrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
            <div className="d-flex justify-content-end">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled text-light" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </nav >
    );
}

export default Navbar;