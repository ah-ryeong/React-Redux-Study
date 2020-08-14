import React from 'react';
import DisplayNumberContainer from '../containsers/DisplayNumberContainer';

const DisplayNumberRoot = (props) => {
  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumberContainer number={props.number} />
    </div>
  );
};

export default DisplayNumberRoot;
