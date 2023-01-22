import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = values => {
    values.id = nanoid();
    const isInContacts = this.state.contacts.filter(
      contact => contact.name === values.name
    );
    console.log(isInContacts);
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
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
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
