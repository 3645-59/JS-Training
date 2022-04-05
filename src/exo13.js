// fn prend en premier argument un callback
// fn(function callback(error, result){ ... }, arg1, arg2);
export function promisify(fn) {
  // TODO: retourner une fonction appelant fn mais
  // retournant une Promise au lieu de passer un callback
}

// exemple d'utilisation
const wait = promisify(setTimeout);
wait(1000)
  .then(() => {
    console.log("1");
    return wait(1000);
  })
  .then(() => {
    console.log("2");
    return wait(1000);
  })
  .then(() => {
    console.log("3");
  });

//Mauvaise forme -> enchainement de callback
/*
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);
*/
