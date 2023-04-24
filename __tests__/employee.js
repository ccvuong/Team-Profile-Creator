const Employee = require("../lib/employee")

// test for the employee, name, id, email, role;
describe("Employee", () => {

    it("should return an object", () => {
      const employee = new Employee();

      expect(typeof (employee)).toBe("object");
    })
  });

  
  describe("getName", () => {

    it("should return the string of the employee name", () => {
      const name = new Employee('John Smith');

      expect(name.getName()).toEqual('John Smith');
    })
  });

 
  describe("getId", () => {

    it("should return the number of employee id", () => {
      const id = new Employee('John Smith', 1);

      expect(id.getId()).toEqual(1);
    })
  });

  
  describe("getEmail", () => {

    it("should return the strings of employee email", () => {
      const email = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(email.getEmail()).toEqual('johnsmith@gmail.com');
    })
  });

  
  describe("getRole", () => {

    it("should return the string of employee role", () => {
      const role = new Employee('John Smith', 1, 'johnsmith@gmail.com', 'Employee');

      expect(role.getRole()).toEqual('Employee');
    })
  })
