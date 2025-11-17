import { formatSpecs } from "./formatproduct";

describe("testing formatproduct utility function", () => {
  test("simple test-1", () => {
    const specs = {
      display: "6.5 inch AMOLED",
      storage: "128GB",
      ram: "8GB",
      battery: "5000mAh",
      isNoiseCancellation: true,
    };

    formatSpecs(specs);
  });
});
