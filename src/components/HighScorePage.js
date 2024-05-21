import { Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React, {useState} from "react";
import TableHighScore from "./TableHighScore";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


function HighScorePaga() {

    const leaderboardData = localStorage.getItem('leaderboard') ;
    const leaderboard = JSON.parse(leaderboardData) || [];

    const updatedCardList = leaderboard.map((player,index) => (
        <tr key={index+1}>
            <td>{index+1}</td>
            <td>{player["name"]}</td>
            <td>{player["score"]}</td>
        </tr>
    ));
    const navigate = useNavigate();

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