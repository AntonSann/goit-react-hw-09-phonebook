import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListStyle from "./ContactList.module.css";
import Contact from '../Contact/Contact';
import {contactsOperations, contactsSelectors} from '../../Redux/Contacts/';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}>
          <Contact
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};