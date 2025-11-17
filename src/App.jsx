import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactLists from "./components/ContactLists";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContacts) return JSON.parse(storedContacts);
    return [];
  });

  const addContactHandler = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: uuidv4(), ...contact },
    ]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList)
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactLists contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
