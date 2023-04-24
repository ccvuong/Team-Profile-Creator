const Intern = require("../lib/intern")

// testing for intern, school, role;
describe("Intern", () => {

  it("should return an object", () => {
    const intern = new Intern();

    expect(typeof (intern)).toBe("object");
  })
});


describe("getSchool", () => {

  it("should return object's school", () => {
    const school = new Intern('John Smith', 1, 'johnsmith@gmail.com', 'UCDavisbootcamp');

    expect(school.getSchool()).toEqual('UCDavisbootcamp');
  })
});


describe("getRole", () => {

  it("should return the string role of intern", () => {
    const role = new Intern('John Smith', 1, 'johnsmith@gmail.com', 'UCDavisbootcamp', 'Intern');

    expect(role.getRole()).toEqual('Intern');
  })
});