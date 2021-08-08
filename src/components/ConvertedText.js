import React from 'react';

function ConvertedText(props) {
  let textArray = props.text.split('\r\n');

  //traverse array to check for and remove comments
  let multiLine = false;
  for (let i = 0; i < textArray.length; i++) {
    let lineLength = textArray[i].length;
    let newLine = '';

    for (let j = 0; j < lineLength; j++) {
      //check if multiline comment ends
      if (multiLine === true) {
        if (textArray[i][j] === '*' && textArray[i][j + 1] === '/') {
          multiLine = false;
          j++;
      //if multiline comment, continue traversing without adding line contents to newLine
        } else {
          continue;
        }
      } else {
        //check if multiline comment starts
        if (textArray[i][j] === '/' && textArray[i][j + 1] === '*') {
          multiLine = true;
          break;

        //check for single line comment
        } else if (textArray[i][j] === '/' && textArray[i][j + 1] === '/') {
          break;

        } else {
        //add contents of string that is not comments to newLine
          newLine += textArray[i][j];
        }
      }
    }
  //reassign string in textArray to cleaned newLine without the comments
    textArray[i] = newLine;
  }
 
  //remove empty lines from array
  let cleanedArray = textArray.filter((x) => x !== null && x !== '');
  
  //print cleaned array line by line
  return (
    <>
      <h1 className="mb-3">React Comment Remover</h1>
      <hr />
      <div className='textDisplayArea'>
      <h3>Text with comments removed: </h3>
      <div className='showText'>
        {cleanedArray.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      </div>
    </>
  );
}

export default ConvertedText;
