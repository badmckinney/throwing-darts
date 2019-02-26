const chai = require('chai');
const expect = chai.expect;
const should = chai.should;
const scoreThrows = require('../darts.js');

describe('DARTS scoreThrows method', () => {

  it('should be a function', () => {
    expect(scoreThrows).to.be.a('function');
  });

  it('should return a value of -1 if an empty collection is provided', () => {
    let score = scoreThrows([]);

    expect(score).to.equal(-1);
  });

  it('should return the total score from a collection of throws', () => {
    let throws = [5, 20, 9, 3, 1];
    let score = scoreThrows(throws);

    expect(score).to.equal(30);
  });

  it('should award 100 bonus points when all throws are under a radius of 5', () => {
    let throws = [1, 2, 3, 4, 2, 1];
    let score = scoreThrows(throws);

    expect(score).to.equal(160);
  });

  it('should throw an error if anything but an array is passed to the function', () => {
    let throws = 5;

    expect(() => scoreThrows(throws).to.throw('Please provide a collection of throws'));
  });

  it('should throw an error if any of the scores in the collection is not a number or number string', () => {
    let throws = [1, 3, 5, 8, "menorah"];

    expect(() => scoreThrows(throws).to.throw('Please provide a collection of only numbers or number strings'));
  });

  it('should throw an error if any of the throws are a radius about 20', () => {
    expect(() => scoreThrows([40, 1, 1, 1]).to.throw('Please provide a list of valid throws. Throws can only be between 1 and 20'));
    expect(() => scoreThrows([-5, 4, 6, 1]).to.throw('Please provide a list of valid throws. Throws can only be between 1 and 20'));
  });

}); 
