import PageComponent from "./PageComponent.js";

describe("Given a PageComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a div", () => {
      const container = document.createElement("div");

      new PageComponent(container);

      expect(container.querySelector("div")).not.toBeNull();
    });
  });

  describe("When instantiated", () => {
    test("Then it should display a paragraph inside a footer with 'Made By David Pegueroles' as it's content", () => {
      const container = document.createElement("div");
      const expectedTextContent = "Made By David Pegueroles";

      new PageComponent(container);

      expect(container.querySelector("div").innerHTML).toMatch(
        expectedTextContent
      );
    });
  });
});
