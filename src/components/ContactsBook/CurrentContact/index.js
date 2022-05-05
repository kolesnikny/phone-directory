import React from 'react';
import { format } from 'date-fns';
import styles from './CurrentContact.module.css';

const CurrentContact = (props) => {
  const { contact, isCheckeed } = props;

  let response = '';
  if (contact) {
    response = (
      <>
        <img src={contact.picture.large} />
        <p>
          <span>
            {contact.name.first} {contact.name.last}
          </span>
        </p>
        <a type="phone" href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
        <p>{format(new Date(contact.dob.date), 'Y M d')}</p>
      </>
    );
  }
  return <div classnames={styles['current-user']}>{response}</div>;
};

export default CurrentContact;
