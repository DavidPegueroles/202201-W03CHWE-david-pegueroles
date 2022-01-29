import ButtonComponent from "./ButtonComponent";

describe("Given a ButtonComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button", () => {
      const container = document.createElement("div");

      new ButtonComponent(container);

      expect(container.querySelector("button")).not.toBeNull();
    });
  });

  describe("When it receives '➤'", () => {
    test("Then it should render a button with '➤' as it's content", () => {
      const container = document.createElement("div");
      const icon = "➤";

      const button = new ButtonComponent(container, "", icon);

      expect(button.element.textContent).toBe(icon);
    });
  });

  describe("When it receives an action", () => {
    test("Then the action should be invoked", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new ButtonComponent(container, "", "", action);
      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
