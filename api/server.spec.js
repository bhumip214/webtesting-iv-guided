const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  //http status code
  describe("Get /", () => {
    it("should return 200 OK", () => {
      return request(server) // use 'return' here for async testing
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    // http status code - using the squad for async testing
    it("should return 200 OK using the squad", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });

    //format of the data (JSON)
    it("should return JSON", async () => {
      const res = await request(server).get("/");

      expect(res.type).toBe("application/json");
    });

    //shape of the response body
    it('should return { api: "up" }', async () => {
      const res = await request(server).get("/");

      expect(res.body).toEqual({ api: "up" });
    });
  });
});

//http status code
//format of the data (JSON)
//shape of the response body
