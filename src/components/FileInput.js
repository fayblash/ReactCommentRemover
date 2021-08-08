import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FileInput() {
  //hook to assign text to be cleaned to state
  const [text, setText] = useState("");

  const onFileInput = (event) => {
    //read file input and convert to string
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      var output = event.target.result;
      setText(output);
    };
    reader.readAsText(file);
  };
//accept input of text file and display contents
//button to clean and output contents of file
  return (
    <>
      <h1 className="my-3 text-center">React Comment Remover</h1>
      <hr />
      <div className='textDisplayArea'>
        <input type="file" onChange={onFileInput} />
        <h3 className="mt-3">Text from file: </h3>
        <div className='showText'>{text}</div>
        <br />
      </div>
      <Link
        className="btn btn-secondary my-3"
        to={{  pathname: text == "" ? '/read-file' : '/output', state: { text } }}
      >
        Remove Comments
      </Link>
    </>
  );
}
export default FileInput;
