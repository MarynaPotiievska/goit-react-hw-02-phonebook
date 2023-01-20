import { Component } from 'react';
import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <section>
          <h2>Contacts</h2>
          <ul></ul>
        </section>
      </div>
    );
  }
}
