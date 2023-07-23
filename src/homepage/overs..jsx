import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';

export default function Overs({ countOver, setCountOver }) {
  console.log(countOver);
  return (
    <>
      <>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th
                scope='col'
                className='d-flex justify-content-center'
                style={{ textTransform: 'uppercase' }}
              >
                overs:
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
                    <Button variant='none' style={{ border: 'none' }}>
                      <Plus
                        size={25}
                        onClick={() => {
                          setCountOver(countOver + 1);
                        }}
                      />
                    </Button>
                  </div>
                  <h3>{countOver}</h3>
                  <div
                    style={{
                      boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                    }}
                  >
                    <Button
                      variant='none'
                      style={{ border: 'none' }}
                      disabled={countOver === 0 ? true : false}
                    >
                      <Dash
                        size={25}
                        onClick={() => {
                          setCountOver(countOver - 1);
                        }}
                      />
                    </Button>
                  </div>
                </>
              </th>
            </tr>
          </tbody>
        </table>
      </>
    </>
  );
}
