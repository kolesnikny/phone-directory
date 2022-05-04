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

  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPhones().then((data) => {
      dispatch({
        type: 'CONTACTS_DATA_SUCCESS_LOAD',
        data,
      });
    });
    // .catch(() => {
    //   setIsError(true);
    // })
    // .finnaly(() => {
    //   setIsFetching(false);
    // });
  }, []);

  const changeCurrentContact = (contactId) => {
    dispatch({
      type: 'SET_CURENT_CONTACT',
      contactId,
    });
  };

  // const handlerLetter = ({ target }) => {
  //   setCheckedLetter(target.attributes.name.value);
  // };

  // const filteredValue = useMemo(() => {
  //   return phonesData.filter((item) => {
  //     return item.name.last.startsWith(checkedLetter);
  //   });
  // }, [checkedLetter]);

  return (
    <section className={styles['contacts-book']}>
      {/* {isError && <div>Some ERROR happening</div>}
      {isFetching && <div>Loading...</div>} */}
      <div classnames={styles['contacts-list']}>
        <ContactsList
          contacts={state.contacts}
          handler={changeCurrentContact}
        />
      </div>
      <CurrentContact contact={state.currentContat} />
    </section>
  );
};

export default ContactsBook;
