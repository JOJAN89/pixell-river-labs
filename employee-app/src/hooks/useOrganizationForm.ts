
import { useState } from "react";
import type { FormEvent } from "react";
import { useFormInput } from "./useFormInput";
import { organizationService } from "../services/organizationService";
import type { Role } from "../repositories/organizationRepo";

export function useOrganizationForm(
  onCreated: (person: Role) => void
) {
  const firstName = useFormInput();
  const lastName = useFormInput();
  const role = useFormInput();
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const validFirstName = firstName.validate(
      organizationService.validateFirstName
    );

    const validRole = role.validate(
      organizationService.validateRole
    );

    if (!validFirstName || !validRole) return;

    const result = organizationService.createPerson(
      firstName.value,
      lastName.value,
      role.value
    );

    if (result.error || !result.person) {
      setError(result.error);
      return;
    }

    onCreated(result.person);

    firstName.reset();
    lastName.reset();
    role.reset();
  }

  return {
    firstName,
    lastName,
    role,
    error,
    handleSubmit,
  };
}
