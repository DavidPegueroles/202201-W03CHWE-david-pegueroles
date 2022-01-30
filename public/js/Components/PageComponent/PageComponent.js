import getPokemon from "../../pokeArray.js";
import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import ListComponent from "../ListComponent/ListComponent.js";
import NavigationComopnent from "../NavigationComponent/NavigationComponent.js";

class PageComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "div");

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <header>
      <h1 class="title"><img src="images/pokemon-logo.svg" alt="Pokémon logo" /></h1>
    </header>

    <main>
    </main>

    <footer>
      <p>Made By David Pegueroles</p>
    </footer>
    `;

    this.generateNavigation();
    this.generatePokemonList();
    this.generateCard();
  }

  generateNavigation() {
    const navigationParent = this.element;
    new NavigationComopnent(
      navigationParent.querySelector("header"),
      "navigation"
    );
  }

  generatePokemonList() {
    const parentElement = this.element;
    new ListComponent(parentElement.querySelector("main"), "section");
  }

  generateCard() {
    const parentElement = this.element.querySelector(".pokemon-list");

    getPokemon.forEach((pokemon) => {
      new CardComponent(parentElement, "pokemon-list__card", pokemon);
    });
  }
}

export default PageComponent;
