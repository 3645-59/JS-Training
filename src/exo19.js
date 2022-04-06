export const addAliasForProperties = (object, alias) => {
  // TODO: retourner un Proxy pour l'objet permettant
  // de déclarer des alias pour accéder en lecture ou écriture
  // à une propriété de l'objet
  return new Proxy(object, {
    get(obj, prop) {
      return Reflect.get(obj, prop in alias ? alias[prop] : prop);
    },
    set(obj, prop, val) {
      return Reflect.set(obj, prop in alias ? alias[prop] : prop, val);
    },
    has(obj, prop) {
      // retourne true si obj contient une propriété prop ou alias[prop]
      return Reflect.has(obj, prop) || Reflect.has(obj, alias[prop]);
    }
  });
};

// exemple d'utilisation:
const user = addAliasForProperties(
  { name: "Sanchez", first: "Rick" },
  { lastName: "name", firstName: "first" }
);

// `${user.firstName} ${user.lastName}` === "Rick Sanchez"

export const countFunctionCalls = (fn) => {
  // TODO: retourner un Proxy pour la fonction permettant
  // de compter le nombre d'appels faits pour cette fonction,
  // à récupérer via fn.count
  let compteur = 0;
  return new Proxy(fn, {
    get(fn, prop) {
      if (prop === "count") return compteur;
      return Reflect.get(fn, prop);
    },
    apply(fn, thisArg, tabArguments) {
      compteur++;
      return Reflect.apply(fn, thisArg, tabArguments);
    }
  });
};

// exemple d'utilisation:
const fn = countFunctionCalls((n) => n * 2);
fn(1);
fn(2);
fn(999);

// fn.count === 3
