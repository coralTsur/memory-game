import Form from 'react-bootstrap/Form';
import {Fragment, useState} from "react";

function Settings({settingsFilter, updateSettings}) {

    const [errorMessage, setErrorMessage] = useState(""); // State to manage the error message

    const handleChange =(event)=>{
        const name =event.target.name;
        const value =event.target.value;
        if (name === "row") {
            if (settingsFilter.col * value % 2 === 0)
                updateSettings(values =>({...values,[name]:value}));
            else
                setErrorMessage("row * col must be even number");

        }
        else if (name === "col") {
            if (settingsFilter.row * value % 2 === 0)
                updateSettings(values =>({...values,[name]:value}));
            else
                setErrorMessage("row * col must be an even number");

        }
        else
            updateSettings(values =>({...values,[name]:value}));



        console.log("after change: " , value);

    }
    console.log("setting: " , settingsFilter.row);

    return (
        <>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-4'>
                        <Form.Label>Number of rows</Form.Label>
                        <Form.Select name="row" value={settingsFilter.row || ""} onChange={handleChange}>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <Form.Label>Number of cols</Form.Label>
                        <Form.Select name="col" value={settingsFilter.col || ""} onChange={handleChange}>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                        {errorMessage && <div  className="error-message">{errorMessage}</div>}

                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <Form.Label>Delay in seconds</Form.Label>
                        <Form.Select  name ="delay" value={settingsFilter.delay||""} onChange={handleChange}>
                            <option>0.5</option>
                            <option>0.6</option>
                            <option>0.7</option>
                            <option>0.8</option>
                            <option>0.9</option>
                            <option>1</option>
                            <option>1.1</option>
                            <option>1.2</option>
                            <option>1.3</option>
                            <option>1.4</option>
                            <option>1.5</option>
                            <option>1.6</option>
                            <option>1.7</option>
                            <option>1.8</option>
                            <option>1.9</option>
                            <option>2.0</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;