import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Components/Container/Container';
import ContactList from '../Components/ContactList/ContactList.container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import {contactsOperations, contactsSelectors} from '../Redux/Contacts/';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

      return (
      <Container>
        <div>
      <ContactForm />
      <div>
        <Filter />
      {isLoadingContacts && <h1>Загружаем...</h1>}
      </div>
        <ContactList />
      </div>
      </Container>
    );
};


/* class ContactsView extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {

  }
}

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView); */