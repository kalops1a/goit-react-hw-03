import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} className={css.listItem} />
      ))}
    </ul>
  );
};