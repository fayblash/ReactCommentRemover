import React from 'react';
import ConvertedText from '../components/ConvertedText';
import { Link, useLocation } from 'react-router-dom';

function OutputScreen() {
  //receiving text data from input screen  
  const location = useLocation();
  const text = location.state.text;

  return (
    <>
      <ConvertedText text={text} />
      <Link className="btn btn-secondary my-3" to="/read-file">
        Go Back
      </Link>
    </>
  );
}

export default OutputScreen;
