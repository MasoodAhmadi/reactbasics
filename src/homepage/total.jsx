import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';

export default function Total({ countSix, countFour, countTwo, count }) {
  // const Total = countSix * 6 + countFour * 4 + countTwo * 2 + count * 1;

  // const Total = countSix * 6 + countFour * 4 + countTwo * 2 + count * 1;
  // const [totalCount, setTotalCount] = useState([Total]);
  const [data, setData] = useState([]);

  const incrementTotal = () => {
    setData(data + 1);
  };
  const decrementTotal = () => {
    setData(data - 1);
  };
  useEffect(() => {
    (async () => {
      const Total = countSix * 6 + countFour * 4 + countTwo * 2 + count * 1;
      const result = Total;
      setData(result);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // window.location.reload();
  console.log('totalCount', data);
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
                  <Button
                    variant='none'
                    style={{ border: 'none' }}
                    onClick={incrementTotal}
                  >
                    <Plus size={25} onClick='' />
                  </Button>
                </div>
                <h3>{data}</h3>
                <div
                  style={{
                    boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px',
                  }}
                >
                  <Button
                    variant='none'
                    style={{ border: 'none' }}
                    onClick={decrementTotal}
                  >
                    <Dash size={25} />
                  </Button>
                </div>
              </>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
