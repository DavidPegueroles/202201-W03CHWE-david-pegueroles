import Component from "../Component/Component.js";

class CardComponent extends Component {
  // name;
  // number;
  // url;
  pokemon;

  constructor(parentElement, className, pokemon) {
    super(parentElement, "", "div");

    this.pokemon = pokemon;

    this.element.className = `${className} ${this.pokemon.types[0].type.name}`;
    // this.name = name;
    // this.url = url;

    this.generateHTML();
  }

  generateHTML() {
    if (this.pokemon.types[1]) {
      this.element.innerHTML = `
      <img src="${
        this.pokemon.sprites.other.dream_world.front_default
      }" class="pokemon">
      <div>
        <p class="pokemonStats">ID: #${this.pokemon.id}</p>
        <p class="pokemonName">${this.pokemon.name.toUpperCase()}</p>
        <p class="pokemonStats">Weight:${this.pokemon.weight}kg</p>
        <p class="pokemonStats">${this.pokemon.types[0].type.name}/${
        this.pokemon.types[1].type.name
      }</p>

      </div>
      `;
    } else {
      this.element.innerHTML = `
      <img src="${
        this.pokemon.sprites.other.dream_world.front_default
      }" class="pokemon">
      <div>
        <p class="pokemonStats">ID: #${this.pokemon.id}.</p>
        <p class="pokemonName">${this.pokemon.name.toUpperCase()}</p>
        <p class="pokemonStats">Weight:${this.pokemon.weight}kg</p>
        <p class="pokemonStats">${this.pokemon.types[0].type.name}</p>
      </div>
      `;
    }
  }
}

export default CardComponent;
