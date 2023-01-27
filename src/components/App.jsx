import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { AppTitle, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = values => {
    values.id = nanoid();
    const isInContacts = this.state.contacts.filter(
      contact => contact.name === values.name
    );
    if (isInContacts.length === 0) {
      this.setState(prevState => ({
        contacts: [values, ...prevState.contacts],
      }));
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  handleInput = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };

  hendleDelete = e => {
    const deletedElId = e.target.parentElement.getAttribute('id');
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedElId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={this.handleSubmit} />

        <Title>Contacts</Title>
        <Filter onChange={this.handleInput} value={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.hendleDelete}
        />
      </div>
    );
  }
}
