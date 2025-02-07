import Form from 'react-bootstrap/Form';
import {Fragment, useState} from "react";
import InputName from "./InputName";
import {Alert} from "react-bootstrap";

function Settings({settingsFilter, updateSettings, setPlayerData,playerData}) {

    const [errorMessage, setErrorMessage] = useState(false); // State to manage the error message
    /**
     * handle the change of settings, and checks if the amount of cards is even
     * @param event
     */
    const handleChange =(event)=>{
        const name =event.target.name.trim();
        const value =event.target.value;
        if (name === "row") {
            if (settingsFilter.col * value % 2 === 0) {
                updateSettings(values => ({...values, [name]: value}));
                setErrorMessage(false);
            }
            else
                setErrorMessage(true);
        }
        else if (name === "col") {
            if (settingsFilter.row * value % 2 === 0) {
                updateSettings(values => ({...values, [name]: value}));
                setErrorMessage(false);
            }
            else
                setErrorMessage(true);

        }
        else
            updateSettings(values =>({...values,[name]:value}));
    }

    return (
        <>
            <div className='container - fluid'>
                <InputName playerData = {playerData} setPlayerData={setPlayerData}/>
                <div className='row'>
                    <div className=' col-12 col-md-4'>
                        <h3>Number of rows:</h3>
                        <Form.Select size="lg" name="row" value={settingsFilter.row || ""} onChange={handleChange}>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>
                        <br/>

                    </div>
                    <div className='col-12 col-md-4'>
                        <h3>Number of columns:</h3>
                        <Form.Select size="lg" name="col" value={settingsFilter.col || ""} onChange={handleChange}>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Select>

                        <br/>
                    </div>

                    <div className='col-12 col-md-4'>
                        <h3>Delay in seconds:</h3>
                        <Form.Select size="lg" name="delay" value={settingsFilter.delay || ""} onChange={handleChange}>
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
                    <br/>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8">
                        {errorMessage &&
                            <Alert variant="danger">The numbers you chose weren't even multiple num of cards</Alert>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;