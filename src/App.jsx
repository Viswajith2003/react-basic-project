import React, { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactLists from "./components/ContactLists";
import { uuid } from "uuid";

const LOCAL_STORAGE_KEY = "contacts";
function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contacts }]);
  };

  useEffect(() => {
    const selectContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (selectContacts) setContacts(selectContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactLists contacts={contacts} />
    </div>
  );
}

export default App;
