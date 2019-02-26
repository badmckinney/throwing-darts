/*  
 *  @param throws                array of throws
 *  @method scoreThrows          returns the total score of a collection of throws
 */

module.exports = scoreThrows = (throws) => {
  if (throws.length < 1) {
    return -1;
  }

  if (!Array.isArray(throws)) {
    throw new Error('Please provide a collection of throws');
  }

  let score = 0;
  let bonus = true;

  for (let i = 0; i < throws.length; i++) {
    if (isNaN(parseInt(throws[i]))) {
      throw new Error('Please provide a collection of only numbers or number strings')
    }

    if (throws[i] > 20 || throws[i] < 1) {
      throw new Error('Please provide a list of valid throws. Throws can only be between 1 and 20');
    }

    if (parseInt(throws[i]) < 5) {
      score += 10;
    } else if (parseInt(throws[i]) < 11) {
      score += 5;
      bonus = false;
    } else {
      bonus = false;
    }
  };

  if (bonus === true) {
    return score + 100;
  }

  return score;
};