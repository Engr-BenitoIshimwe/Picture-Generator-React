import React from 'react';
import Image from './images/electric-guitar.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={Image} alt='' className='header--image' />
      <h2 className='header--title'>Picture Generator</h2>
      <h4 className='header--project'>React Project</h4>
    </header>
  );
}
