import React from 'react';
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
  const contactsEntries = [...props.contacts.entries()];

  const checkContact = (event) => {
    props.handler(event.target.attributes.name.value);
  };

  const layout = contactsEntries.map(([letter, contacts], index) => {
    contacts.sort(comparator);
    return (
      <div className={styles['contacts-container']} key={index}>
        <h1 key={letter}>{letter}</h1>
        <ul className={styles['contacts']}>
          {contacts.map((user) => (
            <li
              key={user.login.uuid}
              name={`${letter} ${user.login.uuid}`}
              onClick={checkContact}
            >
              {user.name.last}, {user.name.first}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return <>{layout}</>;
};

export default ContactsList;
