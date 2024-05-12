import  {Form, FloatingLabel,Alert} from 'react-bootstrap';
import {Fragment, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function MenuBar() {

    return (
        <>
            <div className='container - fluid' >
                <div className='row'    >
                    <div className='col-4' ></div>
                    <div className='col-4' >

                    </div>
                </div>
                <div className='row'    >
                    <div className='col' >
                        <Link className = {"btn btn-success"} to = {"/play"}>Play</Link>{' '}
                        <Link className = {"btn btn-success"} to = {"/settings"}>Settings</Link>{' '}
                        <Link className = {"btn btn-success"} to = {"/highScore"}>High Score</Link>{' '}
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default MenuBar;


