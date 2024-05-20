import {Fragment, useState} from "react";
import {Link, Outlet, Route} from "react-router-dom";
import  {Form, FloatingLabel} from 'react-bootstrap';
import MenuBar from "./MenuBar";

function InputName({setPlayerData}) {
    const handleNameChange = (e) => {
        const nameUser = e.target.value;
        setPlayerData(values =>({...values,name:nameUser}));

    };
    return (
        <>
            <h1>reut</h1>
            <div className='container - fluid' >
                <div className='row'    >
                    <div className='col-2' ></div>
                    <div className='col' >
                        <FloatingLabel controlId="floatingInput" label="Write your name including letters and digits only"
                                       className="mb-3">
                            <Form.Control type="text" pattern="[a-zA-Z0-9]+" maxLength = "12"  placeholder="Your Name:"
                            onChange={handleNameChange}/>
                        </FloatingLabel>
                    </div>
                </div>
                {<MenuBar />}

            </div>
            <Outlet />
        </>
    );
}

export default InputName;




