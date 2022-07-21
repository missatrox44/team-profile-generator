//extend employee
//properties/methods: officeNumber, getRole()-overriden to return 'Manager

const Manager = require('../lib/manager');

describe('test', () => {
  it('should have manager role', () => {
    //arrange
    const manager = new Manager('Jack', '4', 'this@me.com', 'userName');
    //act
    const role = manager.getRole();
    //assert
    expect(role).toBe('Manager');
  })
} )