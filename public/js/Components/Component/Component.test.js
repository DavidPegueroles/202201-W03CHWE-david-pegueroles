import Component from "./Component.js";

describe("Given a Component component", () => {
  describe("When it receives 'div'", () => {
    test("Then it should create a div element to the dom", () => {
      const container = document.createElement("div");

      new Component(container, "test", "div");

      expect(container.querySelector("div")).not.toBeNull();
    });
  });
});
