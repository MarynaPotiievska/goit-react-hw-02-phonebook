import PropTypes from 'prop-types';

import {
  Contact,
  ContactName,
  ContactNumber,
  DefaultMessage,
  DeleteButton,
  List,
} from './ContactList.styled';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterValue = filter.trim();
  const filteredArr = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      {contacts.length === 0 && (
        <DefaultMessage>
          There is no any contact yet. Please, add a contact.
        </DefaultMessage>
      )}
      {contacts.length > 0 && (
        <List>
          {filterValue === '' &&
            contacts.map(contact => {
              const { id, name, number } = contact;
              return (
                <Contact key={id} id={id}>
                  <ContactName>{name}</ContactName>
                  <ContactNumber>{number}</ContactNumber>
                  <DeleteButton type="button" onClick={onDelete}>
                    Delete
                  </DeleteButton>
                </Contact>
              );
            })}
          {filterValue !== '' &&
            filteredArr.map(contact => {
              const { id, name, number } = contact;
              return (
                <Contact key={id} id={id}>
                  <ContactName>{name}</ContactName>
                  <ContactNumber>{number}</ContactNumber>
                  <DeleteButton type="button" onClick={onDelete}>
                    Delete
                  </DeleteButton>
                </Contact>
              );
            })}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
