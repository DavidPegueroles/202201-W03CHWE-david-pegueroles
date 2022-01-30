import CardComponent from "./CardComponent.js";

describe("Given a CardComponent component", () => {
  describe("When giving 'mockObject' as a parameter", () => {
    test("Then it should have 'mockObject.types[0].type.name' value as class & have content inside", () => {
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

      expect(container.querySelector(".type")).not.toBeNull();
    });
  });
});
