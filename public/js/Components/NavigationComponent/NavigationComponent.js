import Component from "../Component/Component.js";

class NavigationComopnent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "nav");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <ul class="navigation-menu">
        <li class="navigation-menu__list"><a href="index.html">Pokédex</a></li>
        <li class="navigation-menu__list"><a href="my-pokemon.html">My Pokémon</a></li>
        <li class="navigation-menu__list"><a href="pokeInfo.html">PokéInfo</a></li>
      </ul>
    `;
  }
}

export default NavigationComopnent;
