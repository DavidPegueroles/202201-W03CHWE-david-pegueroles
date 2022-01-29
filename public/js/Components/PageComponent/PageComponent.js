import Component from "../Component/Component.js";
import NavigationComopnent from "../NavigationComponent/NavigationComponent.js";

class PageComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "", "div");

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
  }

  generateNavigation() {
    const navigationParent = this.element;
    new NavigationComopnent(
      navigationParent.querySelector("header"),
      "navigation"
    );
  }
}

export default PageComponent;
