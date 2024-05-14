import { Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useState} from "react";


function TableHighScore({playerData}) {
    //const [leaderboard{}, setLeaderboard] = useState({name:"", score: 0} );
    const [first, setFirst] = useState(true);

    const leaderboardData = localStorage.getItem('leaderboard');
    if (leaderboardData && first) {
        setFirst(false);
        const leaderboard = JSON.parse(leaderboardData);
        leaderboard.xx = playerData.score;

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }
    else if(!leaderboardData){
        // Create a new leaderboard object
        const leaderboard = { };
        leaderboard.xx = 'v';
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }



    return (
        <>
            <br/>
            <div className='container - fluid'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <Alert key='success' variant='success'>
                            Leader Board
                        </Alert>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>23</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TableHighScore;