import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function EditContact({ updateContactHandler }) {
  const location = useLocation();  //access navigation state
  const navigate = useNavigate();

  // Get contact data from location state
  const { contact } = location.state || {};

  // Initialize with existing contact data
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");

  const edit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      return alert("All the fields are mandatory!");
    }

    // Include the contact ID when updating
    updateContactHandler({ id: contact.id, name, email });

    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main " style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h2 className="ui center aligned header" style={{ marginLeft: "20px" }}>
          Edit Contact
        </h2>
        <Link to="/">
          <button
            className="ui button blue right"
            style={{
              marginLeft: "auto",
              marginRight: "20px",
              width: "fit-content",
              height: "fit-content",
              padding: "10px 20px",
            }}
          >
            Home
          </button>
        </Link>
      </div>
      <form className="ui form container" onSubmit={edit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ui center aligned header">
          <button className="ui button blue" onClick={edit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
