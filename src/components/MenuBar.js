import {Fragment, useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function MenuBar({playerData}) {
    const [errorInput, setErrorInput] = useState(false);
    const navigate = useNavigate();

    /**
     * sent the user to home page
     */
    const handlePlayClick = ()=> {
        console.log("name ",playerData.name);
        if(playerData.name === "") {
            setErrorInput(true);
            console.log("in ",playerData.name);

        }
        else if(!errorInput)
            navigate('/play');
    }

    useEffect(() => {
        if (playerData &&( /^[a-zA-Z0-9 ]+$/.test(playerData.name) || playerData.name === "")) {
            setErrorInput(false);

            console.log(playerData.name);
        }
        else {
            setErrorInput(true);
        }
    }, [playerData]);
    return (
        <>
            <div className='container - fluid'>
                <div className='row'>
                    {errorInput &&  <Alert variant="danger">You have yo write your name using letters and digits only, before starting the game!</Alert>}
                </div>
                <div className='row'>
                    <div className='col'>
                        <Button onClick={handlePlayClick}  className={"btn btn-success btn-lg"} to={"/play"}>Play</Button>{' '}
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


