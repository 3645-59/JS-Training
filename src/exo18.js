export const range = (start, end) => {
  // retourner un itérable itérant entre les deux bornes numériques
  return {
    [Symbol.iterator]: function* () {
      let current = start;
      while (current <= end) yield current++;
    }
  };
};

// exemple d'utilisation
// [...range(5,10)]
// -> [5,6,7,8,9,10]
