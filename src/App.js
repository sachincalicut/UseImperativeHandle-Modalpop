import React, { useRef } from 'react';
import Modal from './Modal';

import './style.css';

export default function App() {
  const modalRef = useRef();
  const handleOptionModal = () => {
    modalRef.current.openModal();
  };
  console.log('parent rendered');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOptionModal}>Open</button>
    </div>
  );
}
