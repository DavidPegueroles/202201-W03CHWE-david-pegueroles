import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import CardComponent from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import ListComponent from "../ListComponent/ListComponent.js";
import NavigationComopnent from "../NavigationComponent/NavigationComponent.js";

// Functions to fetch -----------

async function getNinePokemon() {
  const fetchedArray = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
  );

  const pokemonArrayJson = await fetchedArray.json();

  const pokemonObjects = pokemonArrayJson.results;

  const pokemon = pokemonObjects.map(async (pokemonObject) => {
    const fetchedPokemonObject = await fetch(pokemonObject.url);
    const pokemonObjectJson = fetchedPokemonObject.json();

    return pokemonObjectJson;
  });

  const singlePokemon = Promise.all(pokemon);
  return singlePokemon;
}

const getPokemon = await getNinePokemon();

// Class Component --------------
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

    <aside>
    </aside>

    <footer>
      <p>Made By David Pegueroles</p>
    </footer>
    `;

    this.generateNavigation();
    this.generatePokemonList();
    this.generateCard();
    this.generateButtons();
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

  generateButtons() {
    const parentElement = this.element.querySelector("aside");

    new ButtonComponent(parentElement, "button previous-button", "·•➤", () => {
      this.previousTwenty();
    });

    new ButtonComponent(parentElement, "button next-button", "·•➤", () => {
      this.nextTwenty();
    });
  }

  nextTwenty() {
    this.element.querySelector(".pokemon-list").innerHTML = "";
  }

  previousTwenty() {
    this.element.querySelector(".pokemon-list").innerHTML = "";
  }
}

export default PageComponent;
