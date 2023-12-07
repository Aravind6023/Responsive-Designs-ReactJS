//Packages
import React from "react";

//FONT-AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

//Components
// import { Menu } from "../task8/menu";

export function Login() {
    return (
        <>
            <section>
                <div className="container-fluid min-vh-100">
                    <div className="row bg-primary py-5 d-flex justify-content-center min-vh-100">
                        <div className="col-10 row d-flex align-items-center align-content-center bg-white my-5 rounded-5">
                            <div className="col-12 col-md-6 py-4">
                                <div className="text-center">
                                    <img className="p-4 bg-primary-subtle rounded-circle img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlSS16_1ub4erZt2ztWp9sY5y7F_7eG8QSw&usqp=CAU"></img>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-4 text-center">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <h1>Member Login</h1>
                                    <div className="col-8 py-2 my-3 bg-primary-subtle rounded-5">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faEnvelope} className="px-2" />
                                            <input className="login_Input bg-primary-subtle w-100" type="text" placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className="col-8 py-2 my-3 bg-primary-subtle rounded-5">
                                        <div className="d-flex align-items-center">
                                            <FontAwesomeIcon icon={faLock} className="px-2" />
                                            <input className="login_Input bg-primary-subtle w-100" type="password" placeholder="*******"></input>
                                        </div>
                                    </div>
                                    <div className="col-8 my-3 px-0 rounded-5 login_Bg-Color">
                                        <button className="btn w-100 text-white py-2">Login</button>
                                    </div>
                                    <div className="col-8 py-2 my-3">
                                        <p>Forgot <span className="login_Text-Color">Username / Password?</span></p>
                                    </div>
                                    <div className="col-8 text-center">
                                        <p className="login_Text-Color">Create your account <FontAwesomeIcon icon={faArrowRight} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}