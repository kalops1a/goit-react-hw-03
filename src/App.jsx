import { ContactForm } from './components/ContactForm/ContactForm';
import { Searchbox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { useState } from 'react';
import { useEffect } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

  

export const App = () => {
 
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

   useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
      localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
  }, []);
  

  const addContact = (contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    updateLocalStorage(newContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    updateLocalStorage(updatedContacts);
  };

  const updateLocalStorage = (updatedContacts) => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <Searchbox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};