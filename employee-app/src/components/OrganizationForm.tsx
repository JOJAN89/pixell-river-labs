
import { useOrganizationForm } from "../hooks/useOrganizationForm";
import type { Role } from "../repositories/organizationRepo";

interface Props {
  onCreated: (person: Role) => void;
}

export default function OrganizationForm({ onCreated }: Props) {
  const form = useOrganizationForm(onCreated);

  return (
    <form onSubmit={form.handleSubmit}>
      <h2>Add Organization Member</h2>

      <div>
        <input
          placeholder="First Name"
          value={form.firstName.value}
          onChange={(e) =>
            form.firstName.setValue(e.target.value)
          }
        />
        {form.firstName.message && (
          <p className="error">{form.firstName.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Last Name"
          value={form.lastName.value}
          onChange={(e) =>
            form.lastName.setValue(e.target.value)
          }
        />
      </div>

      <div>
        <input
          placeholder="Role"
          value={form.role.value}
          onChange={(e) =>
            form.role.setValue(e.target.value)
          }
        />
        {form.role.message && (
          <p className="error">{form.role.message}</p>
        )}
      </div>

      {form.error && <p className="error">{form.error}</p>}

      <button type="submit">Add Member</button>
    </form>
  );
}
