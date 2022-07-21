//extend employee
//properties/methods school, getSchool(), getRole()-overrider to return 'Intern'

const Intern = require('../lib/intern');

describe('test', () => {
  it('should have intern role', () => {
    //arrange
    const intern = new Intern('Jack', '4', 'this@me.com', 'userName');
    //act
    const role = intern.getRole();
    //assert
    expect(role).toBe('Intern');
  })
} )