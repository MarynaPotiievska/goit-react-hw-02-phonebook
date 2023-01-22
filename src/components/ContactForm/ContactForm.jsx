import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const contactSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  number: yup.string().phone('UA').required(),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name" component="p" />
        </label>
        <label>
          Phone
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and must start with +"
          />
          <ErrorMessage name="number" component="p" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
