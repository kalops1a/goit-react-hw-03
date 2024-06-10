import css from './Contact.module.css'

export const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button className={css.listItemButton} onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};