import React from "react";

export default function ContactCard(props) {
  const { name, email, id } = props.contact;
  const handleClick = () => props.clickHandler(id);
  return (
    <div
      className="contact-card"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 16px",
        margin: "8px 0",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        gap: "16px",
        minWidth: "250px",
      }}
    >
      <i
        className="user circle icon"
        style={{
          fontSize: "2em",
          color: "#1976d2",
          marginRight: "8px",
        }}
      ></i>
      <div className="content" style={{ flex: 1 }}>
        <div
          className="header"
          style={{ fontSize: "1.1em", fontWeight: "bold" }}
        >
          {name}
        </div>
        <div style={{ fontSize: "0.95em", color: "#555" }}>{email}</div>
      </div>
      <i
        className="trash alternate icon"
        style={{
          color: "#e53935",
          fontSize: "1.5em",
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#b71c1c")}
        onMouseOut={(e) => (e.currentTarget.style.color = "#e53935")}
        onClick={handleClick}
      ></i>
    </div>
  );
}
