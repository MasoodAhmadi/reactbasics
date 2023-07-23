import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
  App,
  PlusSquare,
  DashCircleDotted,
  Plus,
  Dash,
} from 'react-bootstrap-icons';
import { TeamModal } from './modal';
import Overs from './overs.';
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
  const [deactive, setDeactive] = useState(false);
  const [chalk, setChalk] = useState('');
  const [notes, setNotes] = useState(() => {
    const savedState = localStorage.getItem('stateString');
    const notes = JSON.parse(savedState);
    return notes || [];
  });
  const [items, setItems] = useState(highScores);

  const [countSix, setCountSix] = useState(() => {
    const savedState = localStorage.getItem('sixRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });
  const [countOver, setCountOver] = useState(() => {
    const savedState = localStorage.getItem('overs');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });
  const [countFour, setCountFour] = useState(() => {
    const savedState = localStorage.getItem('fourRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });

  const [countTwo, setCountTwo] = useState(() => {
    const savedState = localStorage.getItem('twoRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });
  const [count, setCount] = useState(() => {
    const savedState = localStorage.getItem('oneRuns');
    const notes = JSON.parse(savedState);
    return notes || 0;
  });

  const [teamName, setTeamName] = useState(() => {
    const savedState = localStorage.getItem('teamName');
    const notes = JSON.parse(savedState);
    return notes || '';
  });
  useEffect(() => {
    localStorage.setItem('stateString', JSON.stringify(notes));
  }, [notes]);
  //count six runs
  useEffect(() => {
    localStorage.setItem('sixRuns', JSON.stringify(countSix));
  }, [countSix]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('sixRuns'));
  }, []);
  useEffect(() => {
    localStorage.setItem('overs', JSON.stringify(countOver));
  }, [countOver]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('overs'));
  }, []);

  //count fours
  useEffect(() => {
    localStorage.setItem('fourRuns', JSON.stringify(countFour));
  }, [countFour]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('fourRuns'));
  }, []);

  //count twos
  useEffect(() => {
    localStorage.setItem('twoRuns', JSON.stringify(countTwo));
  }, [countTwo]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('twoRuns'));
  }, []);

  //count ones
  useEffect(() => {
    localStorage.setItem('oneRuns', JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    JSON.parse(localStorage.getItem('oneRuns'));
  }, []);

  useEffect(() => {
    localStorage.setItem('teamName', JSON.stringify(teamName));
  }, [teamName]);

  const countIncrementSix = () => {
    // Update state with incremented value
    setCountSix(countSix + 1);
  };
  const countIncrementFour = () => {
    // Update state with incremented value
    setCountFour(countFour + 1);
  };
  const countIncrementTwo = () => {
    // Update state with incremented value
    setCountTwo(countTwo + 1);
  };
  const countIncrement = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  console.log('items', items);
  const Total = countSix * 6 + countFour * 4 + countTwo * 2 + count * 1;
  const updateNotes2 = (event) => {
    event.preventDefault();
    var newNotes = notes.slice();
    newNotes.push(chalk);
    setChalk('');
    setNotes(newNotes);
  };

  const notesList = notes.map((note) => <>{note}</>);

  console.log('notesList', notesList);
  return (
    <Container>
      <Card
        style={{
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
        }}
      >
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
          <Row>
            <Card.Text>
              <InputGroup className='mb-1'>
                <Form.Control
                  onChange={(event) => {
                    setChalk(event.target.value);
                  }}
                  value={chalk}
                  placeholder='playername'
                  aria-label='playername'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Card.Text>
            <Button variant='primary' onClick={updateNotes2}>
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
      <br />
      <br />
      <Card
        style={{
          border: 'none',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
        }}
      >
        <table className='table table-bordered'>
          <thead>
            <tr className='text-center text-bold table-active'>
              <th scope='col'>Player name:</th>
              <th scope='col'>6</th>
              <th scope='col'>4</th>
              <th scope='col'>2</th>
              <th scope='col'>1</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr className='text-center text-bold'>
                <>
                  <th scope='row'>{note}</th>
                  <th
                    scope='row'
                    onClick={deactive === false ? countIncrementSix : null}
                  >
                    {' '}
                    <Button
                      disabled={deactive === true ? true : false}
                      className={`${
                        deactive === true ? 'text-decoration-line-through' : ''
                      }`}
                      variant='none'
                      style={{
                        width: '100%',
                        boxShadow:
                          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      }}
                    >
                      {countSix}
                    </Button>
                  </th>
                  <th
                    scope='row'
                    onClick={deactive === false ? countIncrementFour : null}
                  >
                    {' '}
                    <Button
                      disabled={deactive === true ? true : false}
                      className={`${
                        deactive === true ? 'text-decoration-line-through' : ''
                      }`}
                      variant='none'
                      style={{
                        width: '100%',
                        boxShadow:
                          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      }}
                    >
                      {countFour}
                    </Button>
                  </th>
                  <th
                    scope='row'
                    onClick={deactive === false ? countIncrementTwo : null}
                  >
                    <Button
                      disabled={deactive === true ? true : false}
                      className={`${
                        deactive === true
                          ? 'text-decoration-line-through text-red'
                          : ''
                      }`}
                      variant='none'
                      style={{
                        width: '100%',
                        boxShadow:
                          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      }}
                    >
                      {countTwo}
                    </Button>
                  </th>
                  <th
                    scope='row'
                    onClick={deactive === false ? countIncrement : null}
                  >
                    <Button
                      disabled={deactive === true ? true : false}
                      className={`${
                        deactive === true ? 'text-decoration-line-through' : ''
                      }`}
                      variant='none'
                      style={{
                        width: '100%',
                        boxShadow:
                          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
                      }}
                    >
                      {' '}
                      {count}
                    </Button>
                  </th>
                </>
                <th scope='row' onClick={() => setDeactive(true)}>
                  <DashCircleDotted
                    size={25}
                    style={{
                      color: 'red',
                      border: 'none',
                    }}
                  />

                  {/* {' '}
                </DashCircleDotted> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <br />
      <br />
      <br />
      <Card
        style={{
          border: 'none',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
        }}
      >
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th
                scope='col'
                className='d-flex justify-content-center'
                style={{ textTransform: 'uppercase' }}
              >
                Total score:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='d-flex justify-content-between'>
                <>
                  <div
                    style={{
                      boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                    }}
                  >
                    <Plus size={25} />
                  </div>
                  <h3>{Total}</h3>
                  <div
                    style={{
                      boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                    }}
                  >
                    <Dash size={25} />
                  </div>
                </>
              </th>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card>
        <Overs countOver={countOver} setCountOver={setCountOver} />
      </Card>
      <div className='d-flex gap-2 mt-3'>
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
        <br />
        <br />

        <Button
          onClick={() => {
            localStorage.clear() || window.location.reload();
          }}
          variant='primary'
          style={{
            width: '100%',
            backgroundColor: 'gray',
            border: 'none',
          }}
        >
          clear
        </Button>
      </div>
    </Container>
  );
}
export default ScoreBoard;
