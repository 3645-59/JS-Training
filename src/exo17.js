const Component = {
  name: "generic-component",
  tag: "div",
  render() {
    this.elm = document.createElement(this.tag);
    this.elm.className = this.name;
    document.body.appendChild(this.elm);
  }
};

const Clickable = {
  listenToClickEvents(elm) {
    elm.addEventListener("click", (event) => this.onClick(event));
  },
  onClick(event) {
    console.log("click event", event);
  }
};

const Focusable = {
  listenToFocusEvents(elm) {
    elm.addEventListener("focus", (event) => this.onFocus(event));
    elm.addEventListener("blur", (event) => this.onBlur(event));
  },
  onFocus(event) {
    console.log("focus event", event);
  },
  onBlur(event) {
    console.log("blur event", event);
  }
};

const Editable = {
  listenToKeyboardEvents(elm) {
    elm.addEventListener("keyup", (event) => this.onKey(event));
  },
  onKey(event) {
    console.log("key pressed", event);
  }
};

const Button = {
  text: "Button",
  tag: "button",
  name: "button",
  render() {
    super.render();
    this.elm.textContent = this.text;
    // TODO: écouter les événements clic et focus
    this.listenToClickEvents(this.elm);
    this.listenToFocusEvents(this.elm);
    return this.elm;
  }
};

const Input = {
  value: null,
  tag: "input",
  render() {
    super.render();
    this.elm.value = this.value;
    // TODO: écouter les événements keyup et focus
    this.listenToKeyboardEvents(this.elm);
    this.listenToFocusEvents(this.elm);
    return this.elm;
  }
};

const TextInput = Object.assign(Object.create(Input), {
  name: "text-input",
  onKey(event) {
    this.value = event.target.value;
  }
});

//TODO: établir et coder les relations entre les différents objets: délégation, composition ou encapsulation
Object.setPrototypeOf(Button, Component);
Object.setPrototypeOf(Input, Component);
Object.setPrototypeOf(TextInput, Input);
Object.assign(Button, Clickable, Focusable);
Object.assign(Input, Editable, Focusable);

/**
 * Exemple d'utilisation
 * Décommenter la partie Exo 17 dans index.html pour tester le fonctionnel attendu
 */

let text = Object.create(TextInput);
text.value = "Bob";
text.render();

let btn = Object.create(Button);
btn.text = "Salut !";
btn.onClick = () => alert(`Salut ${text.value} !`);
btn.render();
