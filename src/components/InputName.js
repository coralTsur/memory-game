import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import  {Form, FloatingLabel} from 'react-bootstrap';
import MenuBar from "./MenuBar";

function InputName({playerData, setPlayerData}) {
    /**
     * updates the name
     * @param e - event onChange
     */
    const handleNameChange = (e) => {
        const nameUser = e.target.value.trim();
        setPlayerData(values =>({...values,name:nameUser}));

    };
    return (
        <>
            <div className='container - fluid' >
                <div className='row'>
                    <div className='col-4' ></div>
                    <div className='col-12 col-xl-4' >
                        <FloatingLabel controlId="floatingInput" label="Write your name including letters and digits only"
                                       className="mb-3">
                            <Form.Control type="text" value ={playerData.name} maxLength = "12"  placeholder="Your Name:"
                            onChange={handleNameChange}/>
                        </FloatingLabel>
                    </div>
                </div>
                {<MenuBar playerData={playerData} />}
            </div>
            <Outlet />
        </>
    );
}

export default InputName;




