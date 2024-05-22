
import Button from 'react-bootstrap/Button';
import GameManager from './GameManager'
import { useNavigate } from 'react-router-dom';


function Play({settingsFilter, playerData, updatePlayerData}) {
    const navigate = useNavigate();
    /**
     * send the user to home page
     */
    const goToHomePage= () => {
        navigate('/');
}

    return(
        <>
            <div>
                <GameManager settings={settingsFilter} playerData={playerData} updatePlayerData={updatePlayerData}/>
            </div>
            <br/>
            <div>
                <Button onClick={goToHomePage} variant="danger">Back to HOME page</Button>{' '}

            </div>
        </>
    );
}

export default Play;