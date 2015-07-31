var spy;
describe('Level 5 Challenges...', function() {

  describe('indexOf', function() {
    it('should have 40 in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 40)).to.be(3);
    });

    it('should be able to compute indexOf even when the native function is undefined', function() {
      var numbers = [10, 20, 30];
      expect(indexOf(numbers, 20)).to.be(1);
    });

    it('returns -1 when the target cannot be found not in the list', function() {
      var numbers = [10, 20, 30, 40, 50];
      expect(indexOf(numbers, 35)).to.be(-1);
    });

    it('returns the first index that the target can be found at when there are multiple matches', function() {
      var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
      expect(indexOf(numbers, 40)).to.be(1);
    });
  });

  describe('every', function() {
    it('should check if all elements are odd', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      expect(every([1, 3, 5], isOdd)).to.be(true);
      expect(every([1, 4, 5], isOdd)).to.be(false);
    });
  });
  
  describe('each', function() {
    it('should iterate over arrays, providing access to the element, index, and array itself', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      each(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });

    it('should only iterate over the array elements, not properties of the array', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      fruits.shouldBeIgnored = 'Ignore me!';
      each(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });
  });

  describe('select', function() {
    it('should return all even numbers in an array', function() {
      var isEven = function(num) { return num % 2 === 0; };
      var evens = select([1, 2, 3, 4, 5, 6], isEven);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should return all odd numbers in an array', function() {
      var isOdd = function(num) { return num % 2 !== 0; };
      var odds = select([1, 2, 3, 4, 5, 6], isOdd);
      expect(odds).to.eql([1, 3, 5]);
    });
  });
});