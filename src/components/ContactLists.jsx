import React from "react";
import ContactCard from "./ContactCard";


export default function ContactLists(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4" style={{ textAlign: "center", width: "100%", marginTop:"50px" }}>Contact List</h2>
      <div className="ui celled list">
        {props.contacts.map((contact) => (
          <ContactCard
            clickHandler={deleteContactHandler}
            contact={contact}
            key={contact.id ? contact.id : `contact-${contact.email}`}
          />
        ))}
      </div>
    </div>
  );
}
