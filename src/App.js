import React, { useState } from 'react';
import './styles.scss';
import MyComponent from './components/MyComponent';
import Food from './components/Food';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';

const App = () => {
  const [inputFromChild, setInputFromChild] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setInputFromChild(e.target.value);
    console.log('Change');
  };

  const values = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Hamburger' },
    { id: 3, name: 'Coke' }
  ];

  const updateClicked = () => {
    setClicked(true);
  };

  return (
    <div>
      <MyComponent />
      <Food values={values} />
      <Wrapper>
        <p>Child</p>
        <p>Second child</p>
        <p>Third child</p>
      </Wrapper>
      <Alert
        inputFromChild={inputFromChild}
        handleChange={handleChange}
        updateClicked={updateClicked}
      />
      {clicked ? <p>{inputFromChild}</p> : null}
    </div>
  );
};

export default App;
