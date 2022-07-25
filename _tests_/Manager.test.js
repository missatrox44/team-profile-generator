//extend employee
//properties/methods: officeNumber, getRole()-overriden to return 'Manager

const Manager = require('../lib/manager');

describe('test', () => {
  it('should have manager role', () => {
    //arrange
    const manager = new Manager('Jack', '4', 'this@me.com', 'officeNum');
    //act
    const role = manager.getRole();
    //assert
    expect(role).toBe('Manager');
  });
} );

describe('officeNumTest', () => {
  it('should have a office number', () => {
    //arrange
    const manager = new Manager('Jack', '4', 'this@me.com', 'this.officeNumber');
    //act
    const officeNum = manager.getofficeNumber();
    //assert
    expect(officeNum).toBe('this.officeNumber');
  });
});