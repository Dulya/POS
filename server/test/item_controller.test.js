const sinon = require("sinon");

describe("Unit testing item controller", () => {
  beforeEach(() => {
    //creating a sandbox object
    this.sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    this.sandbox.restore();
  });

  it("Should return all the items in the database", () => {});
});
