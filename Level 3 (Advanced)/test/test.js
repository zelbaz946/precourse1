describe('Advanced Level Challenges...', function() {
  describe('uniq', function() {
    it('should return all unique values contained in an unsorted array', function() {
      var list = [1, 2, 1, 3, 1, 4];
      expect(uniq(list)).to.eql([1, 2, 3, 4]);
    });

    it('should handle iterators that work with a sorted array', function() {
      var iterator = function(value) { return value +1; };
      var list = [1, 2, 2, 3, 4, 4];
      expect(uniq(list, true, iterator)).to.eql([1, 2, 3, 4]);
    });
  });

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

  describe('once', function() {
    it("should only run a user-defined function if it hasn't been run before", function() {
      var num = 0;
      var increment = once(function() {
        num += 1;
      });
      increment();
      increment();
      expect(num).to.equal(1);
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
  });
});