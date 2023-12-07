//Packages
import React from 'react';

//Components
// import { Menu } from '../task8/menu';

export function Super()
{
    return(
        <>
        <div className='row bg-black min-vh-100 m-0 pt-5 d-flex justify-content-center'>
            <div className='col-10 text-center'>
                <h1 className='my-4 text-white'>Super Over League</h1>
                <div className='row'>
                    <div className='col-12 col-md-6 h-100 p-0'>
                        <img className='w-100 h-75' src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'></img>
                    </div>
                    <div className='col-12 col-md-6 h-100 p-0'>
                        <img className='w-100 h-75' src='https://assets.ccbp.in/frontend/react-js/csk-img.png'></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}