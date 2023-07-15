import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import embeddedFlag from './pngegg.png';
function App() {
  return (
    <>
      {/* <Navbars /> */}
      <Container className='pt-2'>
        <div className='m-1 mt-4 pt-5'>
          <Card>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center'>
                <h3 style={{ textTransform: 'uppercase' }}>Afghanistan</h3>
              </Card.Title>

              <Card
                style={{
                  border: 'none',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
                }}
              >
                <Row>
                  <Col style={{ backgroundColor: '#fff' }}>
                    <div className='d-flex align-items-center flex-column gap-4'>
                      <Card
                        style={{
                          backgroundColor: 'red',
                          height: '50rem',
                          width: '100%',

                          boxShadow: 'rgba(255, 40, 0, 1) 0px 15px 25px',
                        }}
                      >
                        <span style={{ color: '#fff' }}></span>
                      </Card>
                      <Button
                        variant='primary'
                        style={{
                          width: '100%',
                          backgroundColor: 'red',
                          border: 'none',
                        }}
                      >
                        Cities
                      </Button>
                    </div>
                  </Col>
                  <Col style={{ backgroundColor: '#fff' }}>
                    <div className='d-flex align-items-center flex-column gap-4'>
                      <Card
                        style={{
                          backgroundColor: 'black',
                          height: '50rem',
                          width: '100%',

                          boxShadow: 'rgba(0, 0, 0, 1) 0px 15px 25px',
                        }}
                      >
                        <span style={{ color: '#fff' }}>
                          <div className=''>
                            <div class='position-absolute top-50 start-50 translate-middle'>
                              <img
                                className=''
                                alt='embedded-flag'
                                src={embeddedFlag}
                                height={300}
                              />
                            </div>
                          </div>
                        </span>
                      </Card>
                      <Button
                        variant='primary'
                        style={{
                          width: '100%',
                          backgroundColor: 'black',
                          border: 'none',
                        }}
                      >
                        Cities
                      </Button>
                    </div>
                  </Col>
                  <Col style={{ backgroundColor: '#fff' }}>
                    <div className='d-flex align-items-center flex-column gap-4'>
                      <Card
                        style={{
                          backgroundColor: 'green',
                          height: '50rem',
                          width: '100%',
                          boxShadow: 'rgba(48, 155, 35, 1) 0px 15px 25px',
                        }}
                      >
                        <span style={{ color: '#fff' }}></span>
                      </Card>

                      <Button
                        variant='primary'
                        style={{
                          width: '100%',
                          backgroundColor: 'green',
                          border: 'none',
                        }}
                      >
                        Cities
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Card.Body>
          </Card>
        </div>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
