
//Integration testing for item router
var supertest = require("supertest");
var app = require("../app.js");
const request = require("supertest");

let token;

before(done => {
  request(app)
    .post("/user/login")
    .send({
      email: "john.smith@gmail.com",
      password: "123"
    })
    .end((err, response) => {
      token = response.headers["set-cookie"][0].split(";")[0];
      done();
    });
});

describe("Testing item api routes", () => {
  it("should respond with all items", done => {
    request(app)
      .get("/api/item")
      .set("cookie", token)
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(200, done);
  });
});
