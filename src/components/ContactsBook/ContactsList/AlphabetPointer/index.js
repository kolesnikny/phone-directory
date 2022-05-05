import React from 'react';
import styles from '../ContactsList.module.css';

const AlphabetPointer = (props) => {
  const handleLetter = ({ target }) => {
    props.setAlphabet(target.outerText);
  };

  return (
    <ul className={styles['alphabet-list']}>
      {props.letters.sort().map((letter) => (
        <li key={letter} onClick={handleLetter}>
          {letter}
        </li>
      ))}
    </ul>
  );
};

export default AlphabetPointer;
