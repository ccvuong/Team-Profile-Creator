const Engineer = require("../lib/engineer")

// testing for engineer, github, role;
describe("Engineer", () => {

  it("should return an object", () => {
    const engineer = new Engineer();

    expect(typeof (engineer)).toBe("object");
  })
});


describe("getGithub", () => {

  it("should return the object's github", () => {
    const github = new Engineer('John Smith', 1, 'johnsmith@gmail.com','johnsmithgit');

    expect(github.getGitHub()).toEqual('johnsmithgit');
  })
});


describe("getRole", () => {

  it("should return the string role of engineer", () => {
    const role = new Engineer('John Smith', 1, 'johnsmith@gmail.com','johnsmithgit', 'Engineer');

    expect(role.getRole()).toEqual('Engineer');
  })
});