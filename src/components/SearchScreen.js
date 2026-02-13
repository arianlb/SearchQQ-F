import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { ContactScreen89 } from "./ContactScreen89";
import { ContactScreen117 } from "./ContactScreen117";

export const SearchScreen = () => {
  const [nameButton, setNameButton] = useState("Buscar");
  const [contacts, setContacts] = useState({
    sebanda89: [],
    sebanda117: [],
  });
  const [formValues, handleInputChange] = useForm({
    criteria: "",
  });
  const { criteria } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameButton("Cargando...");
    fetchCustomers();
  };

  const fetchCustomers = () => {
    fetch("https://search-qq-b.vercel.app/api/main/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
        setNameButton("Buscar");
      })
      .catch((error) => {
        alert(
          "An error occurred while processing the customers.",
          error.message,
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Buscar Contacto</h1>
        <hr />

        <div className="mb-3">
          <label className="form-label">Criterio de busqueda:</label>
          <div className="form-group">
            <input
              type="text"
              name="criteria"
              className="form-control"
              placeholder="Phone or Name"
              autoComplete="off"
              value={criteria}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3 col-12">
          {nameButton}
        </button>
      </form>

      {contacts.sebanda89.length > 0 && (
        <>
          <label className="form-label">Sebanda 89</label>
          <div className="card-group">
            {contacts.sebanda89.map((contact) => (
              <ContactScreen89 key={contact.EntityId} contact={contact} />
            ))}
          </div>
        </>
      )}

      {contacts.sebanda117.length > 0 && (
        <>
          <label className="form-label">Sebanda 117</label>
          <div className="card-group">
            {contacts.sebanda117.map((contact) => (
              <ContactScreen117 key={contact.EntityId} contact={contact} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
