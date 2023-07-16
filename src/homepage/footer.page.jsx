import React from 'react';
import { Container } from 'react-bootstrap';
export default function Footer() {
  return (
    <Container className='d-flex justify-content-center'>
      <div style={{ marginTop: '25px', gap: '3' }}>
        <p>all right reserved @2023.</p>
      </div>
      {/* <img alt='cricket_unslpach' src={unsplashcri} width={50} height={50} /> */}
    </Container>
  );
}
