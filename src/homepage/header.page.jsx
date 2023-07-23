import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Container className='d-flex justify-content-center'>
      <div style={{ marginBottom: '20px', gap: '3' }}>
        <strong>Afghans Tampere Cricket(ATC)</strong>
      </div>
      {/* <img alt='cricket_unslpach' src={unsplashcri} width={50} height={50} /> */}
    </Container>
  );
}
