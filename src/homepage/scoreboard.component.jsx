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

const initialValue = {
  playername: '',
  teamname: '',
};

function ScoreBoard() {
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(initialValue);
  const [name, setName] = useState(items.teamname);
  const [palyname, setPlayerName] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedState = localStorage.getItem('stateString');
    const notes = JSON.parse(savedState);
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem('stateString', JSON.stringify(notes));
  }, [notes]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('stateString'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('stateString'));
    if (items) {
      setItems(items);
    }
  }, []);
  const updateNotes = (event) => {
    event.preventDefault();
    var newNotes = notes.slice();
    newNotes.push(palyname);
    setPlayerName('');
    setNotes(newNotes);
  };

  const notesList = notes.map((note) => note);
  console.log('notesList', notesList);
  // console.log('name', name);
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
                <th scope='row'>{notesList}</th>
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
