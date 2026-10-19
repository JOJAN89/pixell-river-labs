
export interface Role {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

let organization: Role[] = [];

export const organizationRepo = {
  getAll(): Role[] {
    return [...organization];
  },

  getById(id: number): Role | undefined {
    return organization.find((person) => person.id === id);
  },

  create(person: Role): Role {
    organization = [...organization, person];
    return person;
  },

  update(id: number, changes: Partial<Omit<Role, "id">>) {
    const existing = this.getById(id);
    if (!existing) return null;

    const updated = { ...existing, ...changes };
    organization = organization.map((person) =>
      person.id === id ? updated : person
    );
    return updated;
  },

  delete(id: number): boolean {
    const oldLength = organization.length;
    organization = organization.filter((person) => person.id !== id);
    return organization.length < oldLength;
  },
};
