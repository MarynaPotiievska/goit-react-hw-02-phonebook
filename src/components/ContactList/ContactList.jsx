import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDelete }) => {
  const filterValue = filter.trim();
  const filteredArr = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );

  return (
    <ul>
      {filterValue === '' &&
        contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id} id={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" onClick={onDelete}>
                Delete
              </button>
            </li>
          );
        })}
      {filterValue !== '' &&
        filteredArr.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id} id={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button type="button" onClick={onDelete}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
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
