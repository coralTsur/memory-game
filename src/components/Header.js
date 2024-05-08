import  {Form, FloatingLabel, Button,Alert} from 'react-bootstrap';

function Header() {
    return (
        <>
            <div className='container - fluid' >
                <div className='row'    >
                    <div className='col-12' >
                        <Alert key= 'success' variant= 'success'>
                            Coral and Reut :))))))))))))))))))))))))) XD
                        </Alert>
                    </div>
                    <div className='row'    >
                        <div className='col-4' ></div>
                        <div className='col-4' >
                            <FloatingLabel controlId="floatingInput" label="Write your name including letters and digits only"
                                           className="mb-3">
                                <Form.Control type="text" pattern="[a-zA-Z0-9]+" placeholder="Your Name:" />
                            </FloatingLabel>
                            <Button variant="success">Play</Button>{' '}
                            <Button variant="success">Settings</Button>{' '}
                            <Button variant="success">High Scores</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;