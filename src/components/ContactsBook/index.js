import React, { useState, useEffect, useReducer } from 'react';
import { getPhones } from '../../api';
import ContactsList from './ContactsList';
import CurrentContact from './CurrentContact';
import { reducer } from '../../reducer.js';
import styles from './ContactsBook.module.css';

const ContactsBook = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    contacts: [],
    currentContat: null,
  });

  useEffect(() => {
    getPhones().then((data) => {
      dispatch({
        type: 'CONTACTS_DATA_SUCCESS_LOAD',
        data,
      });
    });
  }, []);

  const changeCurrentContact = (contactId) => {
    dispatch({
      type: 'SET_CURENT_CONTACT',
      contactId,
    });
  };

  return (
    <section className={styles['contacts-book']}>
      <ContactsList contacts={state.contacts} handler={changeCurrentContact} />
      <CurrentContact contact={state.currentContat} />
    </section>
  );
};

export default ContactsBook;
