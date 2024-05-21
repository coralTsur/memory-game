import  {Form, FloatingLabel,Alert} from 'react-bootstrap';
import {Fragment, useState} from "react";
import {Link, Outlet} from "react-router-dom";

function MenuBar() {

    return (
        <>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4'>

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link  className={"btn btn-success btn-lg"} to={"/play"}>Play</Link>{' '}
                        <Link className={"btn btn-success btn-lg "} to={"/settings"}>Settings</Link>{' '}
                        <Link className={"btn btn-success btn-lg"} to={"/highScore"}>High Score</Link>{' '}

                    </div>
                </div>
                <br/>

            </div>
            <Outlet/>
        </>
    );
}

export default MenuBar;


