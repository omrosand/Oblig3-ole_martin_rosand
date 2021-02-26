import React from 'react';

const Alert = ({ handleChange, inputFromChild, updateClicked }) => {
  const handleClick = () => {
    console.log('Clicked', inputFromChild);
    updateClicked();
  };

  return (
    <>
      <button onClick={handleClick}>Klikk på meg</button>
      <input onChange={handleChange} value={inputFromChild} />
    </>
  );
};

export default Alert;
