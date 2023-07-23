import React from 'react';
import { Card } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';

export default function Overs({ countOver, setCountOver }) {
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
                    <Plus
                      size={25}
                      onClick={() => {
                        setCountOver(countOver + 1);
                      }}
                    />
                  </div>
                  <h3>{countOver}</h3>
                  <div
                    style={{
                      boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                    }}
                  >
                    <Dash
                      size={25}
                      onClick={() => {
                        setCountOver(countOver - 1);
                      }}
                    />
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
