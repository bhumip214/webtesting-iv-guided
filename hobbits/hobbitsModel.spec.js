const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel");

describe("hobbits model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert the provided hobbit into the db", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "sam" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });

    it("should insert the provided hobbit into the db", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
    });
  });
});
