
import { useState } from "react";
import OrganizationForm from "../components/OrganizationForm";
import {
  organizationRepo,
  type Role,
} from "../repositories/organizationRepo";
import "../App.css";

export default function Organization() {
  const [people, setPeople] = useState<Role[]>(() =>
    organizationRepo.getAll()
  );

  function refreshPeople() {
    setPeople(organizationRepo.getAll());
  }

  return (
    <div className="app">
      <h2>Organization</h2>

      {people.map((person) => (
        <section key={person.id}>
          <span>
            {person.firstName} {person.lastName}
          </span>
          <span style={{ float: "right" }}>
            {person.role}
          </span>
        </section>
      ))}

      <OrganizationForm onCreated={refreshPeople} />
    </div>
  );
}
