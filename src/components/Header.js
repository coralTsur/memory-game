import  {Form, FloatingLabel,Alert} from 'react-bootstrap';
import {Fragment, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Header() {

    return (
        <>
            <div className='container - fluid' >
                <div className='row'    >
                    <div className='col-12' >
                        <Alert key= 'success' variant= 'success'>
                            Coral and Reut :))))))))))))))))))))))))) XD
                        </Alert>
                    </div>
                    <div className='row'    >
                        <div className='col-4' ></div>
                        <div className='col-4' >
                            <FloatingLabel controlId="floatingInput" label="Write your name including letters and digits only"
                                           className="mb-3">
                                <Form.Control type="text" pattern="[a-zA-Z0-9]+" placeholder="Your Name:" />
                            </FloatingLabel>
                            <Link className = {"btn btn-success"} to = {"/play"}>Play</Link>{' '}
                            <Link className = {"btn btn-success"} to = {"/settings"}>Settings</Link>{' '}

                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Header;


