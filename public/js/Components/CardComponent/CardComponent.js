import Component from "../Component/Component.js";

class CardComponent extends Component {
  name;
  number;
  url;

  constructor(parentElement, className, name, url) {
    super(parentElement, className, "div");

    this.name = name;
    this.url = url;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <img src="${this.url}" class="pokemon">
      <p class="pokemonName">${this.name}</p>
    `;
  }
}

export default CardComponent;
