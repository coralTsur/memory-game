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
            <div className='container - fluid' >
                <div className='row'    >
                    <div className='col-4' ></div>
                    <div className='col-12 col-xl-4' >
                        <FloatingLabel controlId="floatingInput" label="Write your name including letters and digits only"
                                       className="mb-3">
                            <Form.Control type="text" pattern="[a-zA-Z0-9]+"  maxLength = "12"  placeholder="Your Name:"
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




