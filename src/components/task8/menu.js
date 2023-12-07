//Packages
import React from "react";
import { Link } from "react-router-dom";


export function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">C.A</a>
                    <button className="navbar-toggler bg-body-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="w-100">
                        <ul class="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-evenly">
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/">Congrats</Link></li>
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/Super">Super</Link></li>
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/Buttons">Buttons</Link></li>
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/Notificatoin">Notificatoin</Link></li>
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/Login">Login</Link></li>
                            <li className="py-2"><Link className="text-decoration-none text-white" to="/Tech">Tech</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

