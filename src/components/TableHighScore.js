import { Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React, {useState} from "react";
import Cards from "./Cards";


function TableHighScore() {

    const leaderboardData = localStorage.getItem('leaderboard') ;
    const leaderboard = JSON.parse(leaderboardData) || [];

    const updatedCardList = leaderboard.map((player,index) => (
            <tr key={index+1}>
                <td>{index+1}</td>
                <td>{player["name"]}</td>
                <td>{player["score"]}</td>
            </tr>
    ));

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
                            {updatedCardList}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TableHighScore;