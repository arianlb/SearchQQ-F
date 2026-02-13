import { useState } from "react";
import { PolicyScreen } from "./PolicyScreen";

export const ContactScreen89 = ({ contact }) => {
  const [nameButton, setNameButton] = useState("Ver Polizas");
  const [policies, setPolicies] = useState([]);

  const fetchCustomers = () => {
    setNameButton("Cargando...");
    fetch("https://search-qq-b.vercel.app/api/main/policies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location: 89, customerId: contact.EntityId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPolicies(data);
        setNameButton("Ver Polizas");
      })
      .catch((error) => {
        alert(
          "An error occurred while processing the customers.",
          error.message,
        );
      });
  };

  return (
    <div className="col m-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <strong>{contact.ContactName}</strong>
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Teléfono:</strong> {contact.PrimaryPhone}
            </li>
            {contact.PrimaryEmail.length > 0 && (
              <li className="list-group-item">
                <strong>Correo:</strong> {contact.PrimaryEmail}
              </li>
            )}
          </ul>
          {contact.ContactType === "C" && (
            <button onClick={fetchCustomers} className="btn btn-primary col">
              {nameButton}
            </button>
          )}
          {policies.length > 0 &&
            policies.map((policy) => (
              <div className="card-grid">
                <PolicyScreen key={policy.PolicyId} policy={policy} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
