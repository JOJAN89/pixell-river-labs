
interface Role {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

const leaders: Role[] = [];

export default function Organization() {
  return (
    <div className="app">
      <h2>Organization</h2>
      {leaders.map((person) => (
        <section key={person.id}>
          <span>
            {person.firstName} {person.lastName}
          </span>
          <span style={{ float: "right" }}>
            {person.role}
          </span>
        </section>
      ))}
      <p>
        Add leadership names and roles from
        the case study, page 15.
      </p>
    </div>
  );
}

