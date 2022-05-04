export const reducer = (state, action) => {
  switch (action.type) {
    case 'CONTACTS_DATA_SUCCESS_LOAD': {
      const { data: contacts } = action;

      const contactsMap = new Map();

      contacts.forEach((contact) => {
        const {
          name: { last },
        } = contact;
        const firstLetter = last.charAt(0).toUpperCase();
        const letterArray = contactsMap.has(firstLetter)
          ? contactsMap.get(firstLetter)
          : [];
        letterArray.push(contact);
        contactsMap.set(firstLetter, letterArray);
      });
      return {
        ...state,
        contacts: contactsMap,
      };
    }

    case 'SET_CURENT_CONTACT': {
      const { contactId } = action;

      const [letter, loginUUID] = contactId.split(' ');

      const currentcontact = state.contacts
        .get(letter)
        .filter((item) => item.login.uuid === loginUUID)[0];

      return {
        ...state,
        currentContat: currentcontact,
      };
    }

    default:
      return state;
  }
};
