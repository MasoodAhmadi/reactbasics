import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';

import embeddedFlag from '../pngegg.png';
import useWindowSize from '../use-window-dimentions.hook';
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
  { id: '10', name: '', score: 0 },
];

function ScoreBoard() {
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(highScores);
  const [name, setName] = useState(items.teamname);
  const [chalk, setChalk] = useState('');

  const [palyname, setPlayerName] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedState = localStorage.getItem('stateString');
    const notes = JSON.parse(savedState);
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem('stateString', JSON.stringify(notes));
  }, [notes]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('stateString'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);
  const updateNotes = (event) => {
    event.preventDefault();
    // var newNotes = notes.slice();
    if (palyname === '') {
      return;
    } else {
      setNotes(palyname);
      // newNotes.push(palyname);
    }
  };

  const updateChalk = (event) => {
    setChalk(event.target.value);
  };
  const updateNotes2 = (event) => {
    event.preventDefault();
    var newNotes = notes.slice();
    newNotes.push(chalk);
    setChalk('');
    setNotes(newNotes);
  };
  const notesList = notes.map((note) => (
    <li
      style={{
        borderBottom: '2px solid black',
        padding: ' 5px 0 0',
      }}
    >
      {note}
    </li>
  ));
  // console.log('notesList', notesList);
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <div className='d-flex justify-content-between'>
                {' '}
                <span>Team Name: {items.name}</span>
                <>
                  <PlusSquare size={30} onClick={handleShow} />
                  <TeamModal
                    handleClose={handleClose}
                    show={show}
                    name={name}
                    setName={setName}
                  />
                </>
              </div>
            </Card.Title>
            <br />
            <br />
            <Row>
              <Card.Text>
                <InputGroup className='mb-3'>
                  <Form.Control
                    onChange={(event) => {
                      setPlayerName(event.target.value);
                    }}
                    value={palyname}
                    placeholder='playername'
                    aria-label='playername'
                    aria-describedby='basic-addon1'
                  />
                </InputGroup>

                <form onSubmit={updateNotes2}>
                  <input
                    type='text'
                    placeholder='type here'
                    value={chalk}
                    onChange={updateChalk}
                  />

                  <input type='submit' />
                </form>

                <div
                  className='board'
                  style={{
                    backgroundColor: 'darkgreen',
                    height: '150px',
                    borderBottom: ' 20px solid brown',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: ' 20px',
                    borderRadius: ' 10px 10px 0px 0px',
                  }}
                >
                  <h1
                    className='chalk'
                    style={{
                      color: 'white',
                      opacity: '0.9',
                    }}
                  >
                    {chalk}
                  </h1>
                </div>

                <ul
                  className='notes'
                  style={{
                    textAlign: 'left',
                    border: ' 1px solid gray',
                    margin: '10px 50px',
                    padding: '50px 20px 10px 30px',
                  }}
                >
                  {notesList}
                </ul>
              </Card.Text>
              <Button variant='primary' onClick={updateNotes}>
                Add player
              </Button>
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
                {/* <th scope='row'>{notesList}</th> */}
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
              </tr>
              {/* <tr className='text-center text-bold'>
                <th scope='row'>ahmad</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
                <th scope='row'>0</th>
              </tr> */}
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
