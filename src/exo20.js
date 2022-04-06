import data from "../__tests__/fakedata.json";

export const query = (array) =>
  Object.assign(array, {
    where(key, condition) {
      //TODO: filtrer les éléments selon une condition sur une propriété
      return query(array.filter((person) => condition(person[key])));
    },
    orderBy(key) {
      //TODO: trier les éléments selon une propriété
      return query([
        ...array.sort((a, b) => {
          return a[key].localeCompare(b[key]);
        })
      ]);
    },
    take(number) {
      //TODO: retourner les N premiers éléments de la liste
      return query(array.slice(0, number));
    }
  });

// exemple d'utilisation
console.log(
  query(data)
    .where("age", (n) => n >= 18)
    .orderBy("lastName")
    .take(5)
    .map((user) => `${user.firstName} ${user.lastName}`)
    .join("\n")
);
