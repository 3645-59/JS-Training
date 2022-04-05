export function parseUserData1(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 1 - en utilisant Object.assign

  /*
  //1ere solution - la notre
  if (!data.name) {
    Object.assign(data, { name: defaults.name });
  }
  if (!data.isAdmin) {
    Object.assign(data, { isAdmin: defaults.isAdmin });
  }

  return data;
  */

  //2e solution - Corrigé
  return Object.assign({}, defaults, data);
}

export function parseUserData2(data) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :
  const defaults = { name: "Anonymous", isAdmin: false };

  // 2 - en utilisant l'opérateur spread sur les properties
  /*
  //1ere solution - la notre
  if (!data.name) {
    data = { name: defaults.name, ...data };
  }
  if (!data.isAdmin) {
    data = { isAdmin: defaults.isAdmin, ...data };
  }
  */

  //2e solution - Corrigé
  data = { ...defaults, ...data };

  return data;
}

export function parseUserData({
  name = "Anonymous",
  isAdmin = false,
  ...args
}) {
  // TODO: retourner un nouvel objet avec les propriétés de l'objet data
  // et ces valeurs par défaut pour les propriétés manquantes :

  // 3 - en utilisant le destructuring et les paramètres par défaut pour parseUserData
  return { ...args, name, isAdmin };
}
