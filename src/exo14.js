export function Observable(action) {
  this.observers = [];
  /*
    [
      {onValue, onComplete},  //Michel
      {onValue, onComplete},  //Arthur
    ]
  */
  action({
    emit: (value) => {
      //TODO: notifier les observateurs de la valeur émise
      this.observers.forEach((observer) => {
        observer.onValue(value);
      });
    },
    complete: () => {
      //TODO: notifier les observateurs de la complétion
      this.observers.forEach((observer) => {
        observer.onComplete();
      });
    }
  });
}

Observable.prototype.subscribe = function (observer) {
  //TODO: enregistrer l'observateur
  this.observers.push(observer);
  observer.unsubscribe = () => {
    //TODO: supprimer l'observateur
    this.observers = this.observers.filter(
      (tempObserver) => tempObserver !== observer
    );
  };
  return observer;
};

/* exemple d'usage: */
/*
const Loto = new Observable(function tirage({ emit, complete }) {
  setTimeout(() => {
    emit(28);
    emit(16);
    emit(36);
    emit(42);
    complete();
  }, msAvantHeureDuTirage);
});

let michel = Loto.subscribe({
  onValue(numero) {
    if (michel.numeros.includes(numero)) michel.numerosBons++;
  },
  onComplete() {
    alert(`Michel a eu ${michel.numerosBons} bons numéros`);
  }
});

michel.numeros = [7, 13, 36, 49];
michel.numerosBons = 0;
if (michel.doitAllerQuelquePart) michel.unsubscribe();
*/
