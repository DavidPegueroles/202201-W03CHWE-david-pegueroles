import ListComponent from "./ListComponent";

describe("Given a ListComponent component", () => {
  describe("When it renders", () => {
    test("Then it should have 'pokemon-list' as one of it's classes and content inside", () => {
      const container = document.createElement("div");

      new ListComponent(container);

      expect(container.querySelector(".pokemon-list")).not.toBeNull();
    });
  });
});
