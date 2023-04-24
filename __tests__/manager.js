const teamManager = require("../lib/manager")

// testing for manager, office number, role
describe("Manager", () => {

  it("should return an object", () => {
    const manager = new teamManager();

    expect(typeof (manager)).toBe("object");
  })
});

describe("getOfficeNum", () => {

  it("should return object's office number", () => {
    const officeNumber = new teamManager('John Smith', 1, 'johnsmith@gmail.com', 12);

    expect(officeNumber.getOffice()).toEqual(12);
  })
});


describe("getRole", () => {

  it("should return string role of manager", () => {
    const role = new teamManager('John Smith', 1, 'johnsmith@gmail.com', 12, 'Manager');

    expect(role.getRole()).toEqual('Manager');
  })
});

