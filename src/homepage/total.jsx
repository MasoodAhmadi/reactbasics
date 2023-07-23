import React from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';

export default function Totals({ Total }) {
  return (
    <>
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
                  <Plus size={25} onClick='' />
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
    </>
  );
}
