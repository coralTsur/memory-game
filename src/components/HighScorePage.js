import { Alert} from 'react-bootstrap';
import TableHighScore from "./TableHighScore";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


function HighScorePaga() {
    const navigate = useNavigate();

    /**
     * sent the user to home page
     */
    const goToHomePage= () => {
        navigate('/');
    }

    return (
        <>
            <br/>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <Alert key='success' variant='success'>
                            <h2> Leader Board</h2>
                        </Alert>
                        <Button onClick={goToHomePage} variant="outline-warning">Back to HOME page</Button>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <TableHighScore />
                </div>
            </div>
        </>
    );
}
export default HighScorePaga;