import CardComponent from "./CardComponent.js";

describe("Given a CardComponent component", () => {
  describe("When giving an object as a parameter", () => {
    test("Then it should have", () => {
      const container = document.createElement("div");
      const mockObject = {
        id: 1,
        name: "AAAAAaaaAAAAAA",
        weight: 20,
        types: [
          {
            type: {
              name: "type",
            },
          },
        ],
        sprites: {
          other: {
            dream_world: {
              front_default: "",
            },
          },
        },
      };

      new CardComponent(container, "", mockObject);

      expect(container.querySelector("div")).not.toBeNull();
    });
  });
});
