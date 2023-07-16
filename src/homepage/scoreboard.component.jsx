import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';

import embeddedFlag from '../pngegg.png';
import useWindowSize from '../use-window-dimentions.hook';
import { PlusSquare } from 'react-bootstrap-icons';
import { TeamModal } from './modal';
import generate from './screenshot';

const initialValue = {
  playername: '',
  teamname: '',
};

function ScoreBoard() {
  const history = useHistory();
  const size = useWindowSize();

  const [show, setShow] = useState(false);
  const [items, setItems] = useState(initialValue);
  const [name, setName] = useState(items.teamname);
  const [palyname, setPlayerName] = useState('');
  // const [name, setName] = useState(() => {
  //   const savedState = JSON.parse(localStorage.getItem('items'));
  //   console.log('savedState', savedState.name);
  //   // const notes = JSON.parse(savedState);
  //   // return notes || '';
  // });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    // console.log('itddddems', items);
    if (items) {
      setItems(items);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log('items', items);
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
                    onChange={(e) => setPlayerName(e.target.value)}
                    value={palyname}
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

        <>
          <div className='m-1 mt-2 pt-2'>
            <Card>
              <Card.Body>
                <Card.Title className='d-flex justify-content-center'>
                  <h3 style={{ textTransform: 'uppercase' }}>screenshoot</h3>
                </Card.Title>
                {size.width <= 390 ? (
                  <>
                    <Card
                      style={{
                        border: 'none',
                        boxShadow:
                          'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px rgba(0, 0, 0, 0.17) 0px 12px 13px rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                      }}
                    >
                      <Row>
                        <Col style={{ backgroundColor: '#fff' }}>
                          <div className='d-flex align-items-center flex-column gap-4'>
                            <Card
                              style={{
                                backgroundColor: 'black',
                                height: '2rem',
                                width: '89%',

                                boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                              }}
                            >
                              <span style={{ color: '#fff' }}>
                                <div className=''>
                                  <div className='position-absolute top-50 start-50 translate-middle'>
                                    <img
                                      onClick={() => {
                                        generate();
                                      }}
                                      className=''
                                      alt='embedded-flag'
                                      src={embeddedFlag}
                                      height={size.width <= 390 ? 30 : 300}
                                    />
                                  </div>
                                </div>
                              </span>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </>
                ) : (
                  <>
                    {' '}
                    <Card
                      style={{
                        border: 'none',
                        boxShadow:
                          'rgba(0, 0, 0, 0.25) 0px 54px 55px rgba(0, 0, 0, 0.12) 0px -12px 30px rgba(0, 0, 0, 0.12) 0px 4px 6px rgba(0, 0, 0, 0.17) 0px 12px 13px rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                      }}
                    >
                      <Row>
                        <Col style={{ backgroundColor: '#fff' }}>
                          <div className='d-flex align-items-center flex-column gap-4'>
                            <Card
                              style={{
                                backgroundColor: 'black',
                                height: '30rem',
                                width: '100%',

                                boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                              }}
                            >
                              <span style={{ color: '#fff' }}>
                                <div className=''>
                                  <div className='position-absolute top-50 start-50 translate-middle'>
                                    <img
                                      className=''
                                      onClick={() => history.push('/scores')}
                                      alt='embedded-flag'
                                      src={embeddedFlag}
                                      height={size.width <= 364 ? 90 : 300}
                                    />
                                  </div>
                                </div>
                              </span>
                            </Card>
                          </div>
                        </Col>
                      </Row>
                    </Card>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </>
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
