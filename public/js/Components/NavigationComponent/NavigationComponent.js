import Component from "../Component/Component";

class NavigationComopnent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "ul");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <li><a href="index.html">Pokédex</a></li>
      <li><a href="my-pokemon.html">My Pokémon</a></li>
      <li><a href="pokeInfo.html">PokéInfo</a></li>
    `;
  }
}

export default NavigationComopnent;
