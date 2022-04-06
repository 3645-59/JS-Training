export const person = {
  name: "",
  first: "",
  getFullName() {
    return `${this.first} ${this.name}`;
  }
};

// TODO : assigner person comme prototype
export const user = {
  rights: [],
  hasRight(right) {
    return this.rights.includes(right);
  }
};
Object.setPrototypeOf(user, person);

// TODO: assigner user comme prototype
// 1) avec Object.setPrototypeOf
/*
export const bob = {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
};
Object.setPrototypeOf(bob, user);
*/

// 2) avec Object.create et avec Object.assign
export const bob = Object.create(user);
Object.assign(bob, {
  name: "Afett",
  first: "Bob",
  rights: ["create", "read"]
});
