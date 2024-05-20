import  {Form, FloatingLabel,Alert} from 'react-bootstrap';
import {Fragment, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Header() {

    return (
        <>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Alert key='success' variant='success'>
                            Coral and Reut :))))))))))))))))))))))))) XD
                        </Alert>
                    </div>
                </div>
            </div>

            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>

                    </div>
                </div>
            </div>
            <Outlet/>        </>
    );
}

export default Header;


