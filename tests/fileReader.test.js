const readProducts = require("../lib/fileReader");
const inputFile = "products1.json";

describe("File reader", () => {
  it("should throw error if no file exist", async () => {
    try {
      readProducts(inputFile);
    } catch (error) {
      expect(error.code).toMatch("ENOENT");
    }
  });

  it("should throw error if no input passed", async () => {
    try {
      readProducts(null);
    } catch (error) {
      expect(error).toBeNull();
    }
  });
});
