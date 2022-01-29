import NavigationComopnent from "./NavigationComponent";

describe("Given a NavigationComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a nav element", () => {
      const container = document.createElement("div");

      new NavigationComopnent(container);

      expect(container.querySelector("nav")).not.toBeNull();
    });
  });
});
