import data from "../__tests__/fakedata.json";

// TODO: implémenter une fonction qui retourne la composée de plusieurs fonctions
// compose(f,g,h)(...args) <=> h(g(f(...args)))
/*
compose(f,g,h)(arg) <=> compose(g,h)(   f(arg)  )
                    <=> compose(h)(   g(    f(arg)  )   )
                    <=> h(   g(    f(arg)  )   )
*/

export function compose(premiereFonction, ...functions) {
  if (functions.length === 0) {
    return premiereFonction;
  }
  return function (...args) {
    return compose(...functions)(premiereFonction(...args));
  };
}

export function compose2(premiereFonction, ...functions) {
  return function (...args) {
    return functions.reduce(
      (result, fSuivante) => fSuivante(result),
      premiereFonction(...args)
    );
  };
}

// les fonctions composées doivent être pures et non mutables
export const where = (field, condition, array) =>
  array.filter(({ [field]: value }) => condition(value));
export const orderBy = (field, array) =>
  [...array].sort((a, b) => (a[field] < b[field] ? -1 : 1));
export const take = (number, array) => array.slice(0, number);
export const map = (transform, array) => array.map(transform);

// exemple d'utilisation
const query = compose(
  (data) => where("age", (n) => n >= 18, data),
  (results) => orderBy("lastName", results),
  (results) => take(5, results),
  (results) => map((user) => `${user.firstName} ${user.lastName}`, results)
);

console.log(query(data).join("\n"));
