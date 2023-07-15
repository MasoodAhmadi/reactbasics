import React, { useState } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { PlusSquare } from 'react-bootstrap-icons';
import { TeamModal } from './modal';

function ScoreBoard() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <div className='d-flex justify-content-between'>
                {' '}
                <span>Team Name:</span>
                <>
                  <PlusSquare size={30} onClick={handleShow} />
                  <TeamModal handleClose={handleClose} show={show} />
                </>
              </div>
            </Card.Title>
            <br />
            <br />
            <Row>
              <Card.Text>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='playername'
                    aria-label='playername'
                    aria-describedby='basic-addon1'
                  />
                </InputGroup>
              </Card.Text>
              <Button variant='primary'>Add player</Button>
            </Row>
          </Card.Body>
        </Card>
        <br />
        <br />
        <Card>
          <table class='table table-bordered'>
            <thead>
              <tr className='text-center text-bold table-active'>
                <th scope='col'>Player name:</th>
                <th scope='col'>6</th>
                <th scope='col'>4</th>
                <th scope='col'>2</th>
                <th scope='col'>1</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center text-bold'>
                <th scope='row'>masood</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
              </tr>
              <tr className='text-center text-bold'>
                <th scope='row'>ahmad</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
              </tr>
            </tbody>
          </table>
        </Card>
        <br />
        <br />
        <br />
        <Card>
          <table class='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td colspan='2'>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <Button
                onClick={() => history.push('/')}
                variant='primary'
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                  border: 'none',
                }}
              >
                go back
              </Button>
            </tbody>
          </table>
        </Card>
      </Container>
    </div>
  );
}
export default ScoreBoard;
