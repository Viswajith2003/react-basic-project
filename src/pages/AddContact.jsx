import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function AddContact({ addContactHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required")
      .test(
        "no-uppercase",
        "Email must not contain capital letters",
        (value) => {
          if (!value) return true;
          return value === value.toLowerCase();
        }
      ),
  });

  // const add = (e) => {
  //   e.preventDefault();
  //   if (name === "" || email === "") {
  //     return alert("All the fields are mandatory!");
  //   }
  //   addContactHandler({ name, email });
  //   setName("");
  //   setEmail("");
  //   navigate("/");
  // };

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
          Add Contact
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
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addContactHandler(values);
          resetForm();
          navigate("/");
        }}
      >
        {() => (
          <Form className="ui form container">
            <div className="field">
              <label>Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="ui center aligned header">
              <button type="submit" className="ui button blue">
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
