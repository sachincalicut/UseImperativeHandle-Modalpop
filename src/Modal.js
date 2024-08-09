import React, { forwardRef, useImperativeHandle, useState } from 'react';

const Modal = (props, ref) => {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  console.log('child rendered');
  if (!modalState) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Modal Title</h3>
        <p></p>
        <button onClick={() => setModalState(false)}>Close</button>
      </div>
    </div>
  );
};
export default forwardRef(Modal);
