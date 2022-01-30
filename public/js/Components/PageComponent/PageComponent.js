import getPokemon from "../../pokeArray.js";
import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
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
    this.generateCard();
  }

  generateNavigation() {
    const navigationParent = this.element;
    new NavigationComopnent(
      navigationParent.querySelector("header"),
      "navigation"
    );
  }

  generateCard() {
    const parentElement = this.element.querySelector("main");

    getPokemon.forEach((pokemon) => {
      new CardComponent(
        parentElement,
        "pokecard",
        pokemon.name,
        pokemon.sprites.other.dream_world.front_default
      );
    });
  }
}

export default PageComponent;
