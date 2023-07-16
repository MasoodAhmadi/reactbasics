import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PlusSquare } from 'react-bootstrap-icons';
import { TeamModal } from './modal';
// import generate from './screenshot';

const highScores = [
  { id: '1', name: '', score: 0 },
  { id: '2', name: '', score: 0 },
  { id: '3', name: '', score: 0 },
  { id: '4', name: '', score: 0 },
  { id: '5', name: '', score: 0 },
  { id: '6', name: '', score: 0 },
  { id: '7', name: '', score: 0 },
  { id: '8', name: '', score: 0 },
  { id: '9', name: '', score: 0 },
  { id: '10', name: '', score: 0 },
  { id: '11', name: '', score: 0 },
];

function ScoreBoard() {
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [teamName, setTeamName] = useState(() => {
    const savedState = localStorage.getItem('teamName');
    const notes = JSON.parse(savedState);
    return notes || '';
  });

  const [items, setItems] = useState(highScores);

  useEffect(() => {
    localStorage.setItem('teamName', JSON.stringify(teamName));
  }, [teamName]);

  useEffect(() => {
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }, [items]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('highscores'));
  }, []);

  // const updateNotes = (event) => {
  //   event.preventDefault();
  //   // var newNotes = notes.slice();
  //   if (palyname === '') {
  //     return;
  //   } else {
  //     setNotes(palyname);
  //     // newNotes.push(palyname);
  //   }
  // };

  // const updateChalk = (event) => {
  //   setChalk(event.target.value);
  // };
  // const updateNotes2 = (event) => {
  //   event.preventDefault();
  //   var newNotes = notes.slice();
  //   newNotes.push(chalk);
  //   setChalk('');
  //   setNotes(newNotes);
  // };

  console.log('items', items);
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'>
            {' '}
            <p>Team Name: {teamName}</p>
            <PlusSquare size={30} onClick={handleShow} />
            <TeamModal
              handleClose={handleClose}
              show={show}
              name={teamName}
              setName={setTeamName}
            />
          </Card.Title>
          <br />
          <br />
          <Row>
            <Card.Text>
              <InputGroup className='mb-3'>
                <Form.Control
                  onChange={(event) => {
                    setItems(event.target.value);
                  }}
                  value={items.name}
                  placeholder='playername'
                  aria-label='playername'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Card.Text>
            <Button variant='primary'>Add player</Button>
            {/* <Button
                variant='primary'
                onClick={() => {
                  generate();
                }}
              >
                screenshoot
              </Button> */}
          </Row>
        </Card.Body>
      </Card>
      <br />
      <br />
      <table className='table table-bordered'>
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
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <table className='table table-bordered'>
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
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
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
    </Container>
  );
}
export default ScoreBoard;
