import React from 'react';
import { Button, Form, Modal, Card, Row, InputGroup } from 'react-bootstrap';

export const TeamModal = ({ show, handleClose, setName, name }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Team Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <Row>
            <Card.Text>
              <InputGroup className='mb-3'>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='type a team name...'
                  aria-label='teamname'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Card.Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
