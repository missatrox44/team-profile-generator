//extend employee
//properties/methods school, getSchool(), getRole()-overrider to return 'Intern'

const Intern = require('../lib/intern');

describe('test', () => {
  it('should have intern role', () => {
    //arrange
    const intern = new Intern('Jack', '4', 'this@me.com', 'school');
    //act
    const role = intern.getRole();
    //assert
    expect(role).toBe('Intern');
  });
} );

describe('schoolTest', () => {
  it('should have a string of school name', () => {
    //arrange
    const intern = new Intern('Jack', '4', 'this@me.com', 'this.school');
    //act
    const school = intern.getSchool();
    //assert
    expect(school).toBe('this.school');
  });
});