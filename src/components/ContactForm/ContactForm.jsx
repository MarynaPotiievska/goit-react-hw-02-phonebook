import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={(values, actions) => {
          console.log(values, actions);
        }}
      >
        {props => (
          <Form>
            <label>
              Name
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              Phone
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ContactForm;
