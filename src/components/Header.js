import  {Alert} from 'react-bootstrap';
import {Fragment} from "react";
import { Outlet} from "react-router-dom";

function Header() {

    return (
        <>
            <div className='container - fluid'>
                <div className='row'>
                    <Alert key='success' variant='success'>
                        <h1 className="display-1">Memory Game</h1>
                    </Alert>
                </div>
            </div>
            <Outlet/>
        </>
    );
}

export default Header;


