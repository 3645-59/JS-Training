// essayez d'utiliser l'opérateur spread et rest

// TODO: fonction retournant un objet avec comme propriétés
// la liste des valeurs reçues en arguments et comme valeur
// le nombre de fois où elles sont apparues
export function count(...args) {
  /*
  //1er possibilité
  return args.reduce((result, arg) => {
    if (!result.hasOwnProperty(arg)) {
      result[arg] = 0;
    }
    result[arg]++;
    return result;
  }, {});*/

  //2nd possibilité - Corrigé
  return args.reduce((acc, arg) => {
    const nbCurrentArg = acc[arg] ? acc[arg] + 1 : 1;
    return { ...acc, [arg]: nbCurrentArg };
  }, {});
}

// exemple d'utilisation:
count("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte");
// { Carotte: 2, Chou: 3, Patate: 1 }

// TODO: fonction retournant l'argument apparu le plus de fois
export function mostFrequentIn(...args) {
  /*
  //1ere solution
  const res = Object.entries(count(...args)).reduce((result, arg) => {
    if (!result || result[1] < arg[1]) {
      return arg;
    }
    return result;
  }, null);

  return res[0];
  */

  //2nd solution - Corrigé
  const fruitCount = count(...args);
  const maxNumber = Math.max(...Object.values(fruitCount));
  return Object.keys(fruitCount).find(
    (legume) => fruitCount[legume] === maxNumber
  );
}

// exemple d'utilisation:
mostFrequentIn("Carotte", "Chou", "Patate", "Chou", "Chou", "Carotte") ===
  "Chou";
