import Component from "../Component/Component";

class NavigationComopnent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "nav");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <ul>
        <li><a href="index.html">Pokédex</a></li>
        <li><a href="my-pokemon.html">My Pokémon</a></li>
        <li><a href="pokeInfo.html">PokéInfo</a></li>
      </ul>
    `;
  }
}

export default NavigationComopnent;
