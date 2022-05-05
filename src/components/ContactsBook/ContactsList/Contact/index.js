import React, { useState } from 'react';
import cx from 'classnames';
import styles from '../ContactsList.module.css';

const Contact = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkContact = (event) => {
    // console.log(checkedElement);
    // checkedElement.classList.remove(styles.checked);
    setIsChecked(true);
    props.check(event.target.attributes.name.value);
  };

  const classnames = cx({
    [styles.contact]: true,
    [styles.checked]: isChecked,
  });

  return (
    <li
      className={classnames}
      key={props.keyProp}
      name={props.nameProp}
      onClick={checkContact}
    >
      {props.children}
    </li>
  );
};

export default Contact;
