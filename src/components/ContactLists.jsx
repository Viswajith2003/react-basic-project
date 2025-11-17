import React from "react";
import ContactCard from "./ContactCard";

export default function ContactLists(props) {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id || contact.email} />;
  });
  return <div className="ui celled list">{renderContactList}</div>;
}