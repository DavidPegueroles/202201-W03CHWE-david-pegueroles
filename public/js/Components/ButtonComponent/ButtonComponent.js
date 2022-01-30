import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, icon, actionOnClick) {
    super(parentElement, className, "button");

    this.generateHTML(icon);

    this.addListeners(actionOnClick);
  }

  generateHTML(icon) {
    this.element.textContent = icon;
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default ButtonComponent;
