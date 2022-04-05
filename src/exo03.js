// retourne un objet où les valeurs des propriétés sont devenues les clés et les clés les valeurs
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  let objToReturn = {};
  for (let key of Object.keys(obj)) {
    objToReturn[obj[key]] = key;
  }

  return objToReturn;
}
