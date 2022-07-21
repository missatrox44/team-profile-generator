//extend employee
//properties/methods: gitub -GitHubusername, getGitHub(), getRole()-overidden to return 'Engineer

const Engineer = require('../lib/engineer');

describe('test', () => {
  it('should have engineer role', () => {
    //arrange
    const engineer = new Engineer('Jack', '4', 'this@me.com', 'userName');
    //act
    const role = engineer.getRole();
    //assert
    expect(role).toBe('Engineer');
  })
} )