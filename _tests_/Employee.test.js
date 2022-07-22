

const Employee = require('../lib/employee');

describe('roleTest', () => {
  it('should have employee role', () => {
    //arrange
    const employee = new Employee('Jack', '4', 'this@me.com', 'userName');
    //act
    const role = employee.getRole();
    //assert
    expect(role).toBe('Employee');
  });
});

describe('nameTest', () => {
  it('should have a name from this.name', () => {
    //arrange
    const employee = new Employee('this.name', '4', 'this@me.com', 'userName');
    //act
    const name = employee.getName();
    //assert
    expect(name).toBe('this.name');
  });
});

describe('idTest', () => {
  it('should have an id number from this.id', () => {
    //arrange
    const employee = new Employee('Jack', 'this.id', 'this@me.com', 'userName');
    //act
    const id = employee.getId();
    //assert
    expect(id).toBe('this.id');
  });
});

describe('emailTest', () => {
  it('should have an email from this.email', () => {
    //arrange
    const employee = new Employee('Jack', '4', 'this.email', 'userName');
    //act
    const email = employee.getEmail();
    //assert
    expect(email).toBe('this.email');
  });
});

