
import {
  organizationRepo,
  type Role,
} from "../repositories/organizationRepo";

export const organizationService = {
  validateFirstName(firstName: string): string {
    if (firstName.trim().length < 3) {
      return "First name must have at least 3 characters.";
    }
    return "";
  },

  validateRole(role: string): string {
    if (!role.trim()) {
      return "Please enter a role.";
    }

    const exists = organizationRepo.getAll().some(
      (person) =>
        person.role.trim().toLowerCase() ===
        role.trim().toLowerCase()
    );

    if (exists) {
      return "This role is already occupied.";
    }

    return "";
  },

  createPerson(
    firstName: string,
    lastName: string,
    role: string
  ): { person: Role | null; error: string } {
    const error =
      this.validateFirstName(firstName) ||
      this.validateRole(role);

    if (error) {
      return { person: null, error };
    }

    const person: Role = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim(),
    };

    return {
      person: organizationRepo.create(person),
      error: "",
    };
  },
};
