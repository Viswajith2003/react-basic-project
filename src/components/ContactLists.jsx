import React from "react";
import ContactCard from "./ContactCard";

export default function ContactLists(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div className="ui celled list">
      {props.contacts.map((contact) => (
        <ContactCard
          clickHandler={deleteContactHandler}
          contact={contact}
          key={contact.id ? contact.id : `contact-${contact.email}`}
        />
      ))}
    </div>
  );
}
