//Packages
import React from "react";

//Components
// import { Menu } from "../task8/menu";


export function Tech()
{
    return(
        < >
            <section className="container-fluid bg-body-secondary min-vh-100">
                <div className="row d-flex justify-content-center">
                    <div className="col-9 my-3 text-center">
                        <h1>Learn 4.0 Technologies</h1>
                    </div>
                    <div className="col-9 my-3 text-center">
                        <p>Get trained by alumni of IITs and top companies like Amazon, Microsoft, intel, Nvidia, Qualcomm, etc. Learn directly from professionals invovled in product Development.</p>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div className="col-9">
                            <div className="row g-4">
                                <div className="col-12 col-md-6">
                                <div class="card rounded-4 cus-Card mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Data Scientist</h5>
                                            <p class="card-text">Data scientists gather and analyze large sets of structured and unstructured data.</p>
                                            <div className="text-end">
                                                <img className="img-fluid w-25" src="https://cdn-icons-png.flaticon.com/512/8637/8637114.png"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div class="card rounded-4 cus-Card-Two mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Data Scientist</h5>
                                            <p class="card-text">Data scientists gather and analyze large sets of structured and unstructured data.</p>
                                            <div className="text-end">
                                                <img className="img-fluid w-25" src="https://cdn-icons-png.flaticon.com/512/1185/1185915.png"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div class="card rounded-4 cus-Card-Three mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Data Scientist</h5>
                                            <p class="card-text">Data scientists gather and analyze large sets of structured and unstructured data.</p>
                                            <div className="text-end">
                                                <img className="img-fluid w-25" src="https://www.openarc.net/wp-content/uploads/2021/09/icon-virt-tours.png"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div class="card rounded-4 cus-Card-Four mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Data Scientist</h5>
                                            <p class="card-text">Data scientists gather and analyze large sets of structured and unstructured data.</p>
                                            <div className="text-end">
                                                <img src="https://cdn-icons-png.flaticon.com/512/2103/2103445.png" className="img-fluid w-25" ></img>
                                            </div>
                                        </div>
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