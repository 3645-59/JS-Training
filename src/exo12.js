export function PubSub() {
  this.events = new Map();
  //['event_name': Set([callback1, callback2, ...]])
}

const publisher = new PubSub();

PubSub.prototype.on = function (event, callback) {
  // TODO: enregistrer le callback à déclencher suite à l'événement `event`
  const currentEvent = publisher.events.get(event);
  if (currentEvent) {
    currentEvent.add(callback);
  } else {
    publisher.events.set(event, new Set([callback]));
  }
};

PubSub.prototype.emit = function (event, data) {
  // TODO: appeler les callbacks enregistrés pour l'événement `event`
  publisher.events.get(event).forEach((callback) => {
    callback(data);
  });
};

//Non corrigé
PubSub.prototype.off = function (event, callback) {
  publisher.events.get(event).delete(callback);
  if (publisher.events.get(event).size) {
    publisher.events.delete(event);
  }
};

// Pour aller plus loin:
// - méthode off(event, callback) pour retirer une souscription
// - on('*') pour réagir à tous les événements
