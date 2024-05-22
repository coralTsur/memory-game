import Table from 'react-bootstrap/Table';
import React, {useState} from "react";

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
                    <div className='col-12 col-lg-3'></div>
                    <div className='col-12 col-lg-6'>
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