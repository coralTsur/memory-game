import {Modal, Button, Alert} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function TableHighScore({playerData}) {

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
                                <td>{playerData.score}</td>
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