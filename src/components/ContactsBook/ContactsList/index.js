import React, { useState } from 'react';
import AlphabetPointer from './AlphabetPointer';
import Contact from './Contact';
import styles from './ContactsList.module.css';

const comparator = (a, b) => {
  if (a.name.last > b.name.last) {
    return 1;
  }
  if (a.name.last < b.name.last) {
    return -1;
  } else {
    return 0;
  }
};

const ContactsList = (props) => {
  const [letterAlphabet, setLetterAlphabet] = useState('A');
  const contactsEntries = [...props.contacts.entries()];

  const setAlphabetPointer = (symbol) => {
    setLetterAlphabet(symbol);
  };

  const layout = contactsEntries.map(([letter, contacts], index) => {
    contacts.sort(comparator);

    if (letter === letterAlphabet) {
      return (
        <div className={styles['contacts-container']} key={index}>
          <h1 key={letter}>{letter}</h1>

          <ul className={styles['contacts']}>
            {contacts.map((user) => (
              <Contact
                keyProp={user.login.uuid}
                nameProp={`${letter} ${user.login.uuid}`}
                check={props.handler}
                isChecked={
                  props.currentContact
                    ? props.currentContact.login.uuid === user.login.uuid
                    : false
                }
              >
                {user.name.last}, {user.name.first}
              </Contact>
            ))}
          </ul>
        </div>
      );
    }
  });

  return (
    <div className={styles['contacts-list']}>
      <AlphabetPointer
        letters={[...props.contacts.keys()]}
        setAlphabet={setAlphabetPointer}
      />
      {layout}
    </div>
  );
};

export default ContactsList;
