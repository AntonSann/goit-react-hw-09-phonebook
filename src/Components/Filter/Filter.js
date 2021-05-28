import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import FilterStyle from "./Filter.module.css";
import {contactsSelectors, filterContacts} from '../../Redux/Contacts/';

export default function Filter() {

  const filterInputId = shortid.generate();
  const dispatch = useDispatch();
const value = useSelector(contactsSelectors.getFilter);
const onChangeFilter = e => dispatch(filterContacts(e.target.value));

  return (
  <div className={FilterStyle.filter}>
    <h2>Contacts</h2>
<label  htmlFor={filterInputId}>Filter by name
<input
  type="text"
  name="filter"
  required
  value={value}
  id={filterInputId}
  onChange={onChangeFilter}
/></label></div>
)
};


/* const Filter = ({value, onChangeFilter}) =>{
    const filterInputId = shortid.generate();
    return(<div className={FilterStyle.filter}>
        <h2>Contacts</h2>
    <label  htmlFor={filterInputId}>Filter by name
    <input
      type="text"
      name="filter"
      required
      value={value}
      id={filterInputId}
      onChange={onChangeFilter}
    /></label></div>
    )
}

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter); */