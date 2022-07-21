

const Employee = require('../lib/employee');

describe('test', () => {
  it('should have employee role', () => {
    //arrange
    const employee = new Employee('Jack', '4', 'this@me.com', 'userName');
    //act
    const role = employee.getRole();
    //assert
    expect(role).toBe('Employee');
  })
} )