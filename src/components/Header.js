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
                    <div className='col-2'></div>
                    <div className='col'>
                        <FloatingLabel controlId="floatingInput"
                                       label="Write your name including letters and digits only"
                                       className="mb-3">
                            <Form.Control type="text" pattern="[a-zA-Z0-9]+" placeholder="Your Name:"/>
                        </FloatingLabel>
                    </div>
                </div>
            </div>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link className={"btn btn-success"} to={"/play"}>Play</Link>{' '}
                        <Link className={"btn btn-success"} to={"/settings"}>Settings</Link>{' '}
                        <Link className={"btn btn-success"} to={"/highScore"}>High Score</Link>{' '}
                    </div>
                </div>
            </div>
            <Outlet/>        </>
    );
}

export default Header;


