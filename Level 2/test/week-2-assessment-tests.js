describe('Week-2-Assessment', function() {
  describe('forEach', function() {
    it('should iterate over arrays, providing access to the element, index, and array itself', function() {
      var fruits = ['apple', 'banana', 'carrot'];
      var iterationInputs = [];
      forEach(fruits, function(fruit, index, list) {
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
      forEach(fruits, function(fruit, index, list) {
        iterationInputs.push([fruit, index, list]);
      });
      expect(iterationInputs).to.eql([
        ['apple', 0, fruits],
        ['banana', 1, fruits],
        ['carrot', 2, fruits]
      ]);
    });
  });

  describe('map', function() {
    it('should apply a function to every value in an array', function() {
      var doubled = map([1, 2, 3], function(num) {
        return num * 2;
      });
      expect(doubled).to.eql([2, 4, 6]);
    });
  });

  describe('permutation', function() {
    it('should return the permutation of the number', function() {
      expect(permutation(1)).to.eql(1);
      expect(permutation(2)).to.eql(2);
      expect(permutation(3)).to.eql(6);
      expect(permutation(4)).to.eql(24);
      expect(permutation(5)).to.eql(120);
      expect(permutation(6)).to.eql(720);
    });

    it('should return 0 for non-positive numbers', function() {
      expect(permutation(0)).to.eql(0);
      expect(permutation(-1)).to.eql(0);
      expect(permutation(-2)).to.eql(0);
    });
  });

  describe('longestWord', function() {
    it('should find the longest word', function() {
      var sample = "This is a sample sentence";
      expect(longestWord(sample)).to.eql('sentence');
    });

    it('should pick first word if more than two words have the same length', function() {
      var sample = "I love to code";
      expect(longestWord(sample)).to.eql('love');
    });
  });
});