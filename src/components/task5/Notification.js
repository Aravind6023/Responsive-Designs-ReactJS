//Packages
import React from "react";

//FONT-AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

//Components
// import { Menu } from "../task8/menu";




export function Notificatoin()
{
    return(
        <>
            <section className="row pt-5 pb-3 d-flex justify-content-center">
                <div className="col-10 col-md-8">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Notifications</h1>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-6 col-10 d-flex flex-column align-items-center">
                                    <div className="d-flex text-white bg-info my-4 py-3 w-100 align-items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} className = 'px-3' /><h3>Information Message</h3>
                                    </div>
                                    <div className="d-flex text-white my-4 py-3 notify-Bg-Color w-100 align-items-center">
                                    <FontAwesomeIcon icon={faCircleCheck} className = 'px-3' /><h3>Success Message</h3>
                                    </div>
                                    <div className="d-flex text-white my-4 py-3 bg-warning w-100 align-items-center">
                                    <FontAwesomeIcon icon={faBell} className = 'px-3' /><h3>Warning Message</h3>
                                    </div>
                                    <div className="d-flex text-white my-4 py-3 bg-danger w-100 align-items-center">
                                    <FontAwesomeIcon icon={faCircleExclamation} className = 'px-3' /><h3>Error Message</h3>
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