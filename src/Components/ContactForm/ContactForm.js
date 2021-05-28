import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {contactsOperations, contactsSelectors} from '../../Redux/Contacts/';
import shortid from 'shortid';
import ContactFormStyle from "./ContactForm.module.css";

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event =>{
    setName(event.currentTarget.value)
  }

  const handleNumberChange = event =>{
    setNumber(event.currentTarget.value)
  }

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const normalizedName = name.toLowerCase();
      const sameName = contacts
      .map((item) => item.name.toLowerCase())
      .includes(normalizedName);
  
      if (sameName) {
      alert(`${name} is already in contacts`);
      } else {
dispatch(contactsOperations.addContact({ name, number }));
        setName('');
        setNumber('');
      }        
    },
    [dispatch, name, number],
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor={nameInputId}>Name
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      value={name}
      onChange={handleNameChange}
      id={nameInputId}
    />
    </label>
    <label htmlFor={numberInputId}>Number
        <input
      type="tel"
      name="number"
      pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
      title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
      required
      value={number}
      onChange={handleNumberChange}
      id={numberInputId}
    />
    </label>
    <button className={ContactFormStyle.form_button} type="submit">Add contact</button>
    </form>)
};


/* class ContactForm extends Component {
     state = {    
        name: '',
        number: ''
  }

nameInputId = shortid.generate();
numberInputId = shortid.generate();
  handleChange = event =>{
    this.setState({[event.currentTarget.name]: event.currentTarget.value})
  }

  
  handleSubmit = event =>{
    event.preventDefault();
    const normalizedName = this.state.name.toLowerCase();
    const sameName = this.props.contacts
    .map((item) => item.name.toLowerCase())
    .includes(normalizedName);

    if (sameName) {
    alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
    }
      this.reset();
  }

  reset = () =>{
      this.setState({name: '', number: ''});
  }
render () {
    return (
    <form onSubmit={this.handleSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor={this.nameInputId}>Name
    <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      value={this.state.name}
      onChange={this.handleChange}
      id={this.nameInputId}
    />
    </label>
    <label htmlFor={this.numberInputId}>Number
        <input
      type="tel"
      name="number"
      pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
      title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
      required
      value={this.state.number}
      onChange={this.handleChange}
      id={this.numberInputId}
    />
    </label>
    <button className={ContactFormStyle.form_button} type="submit">Add contact</button>
    </form>)
}
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm); */