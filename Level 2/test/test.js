describe('Level 2 Challenges...', function() {

  describe('returnOdds', function() {
    it('should return odd numbers from an array', function() {
      expect(returnOdds([4, 7, 8, 3, 4, 6])).to.eql([7, 3]);
      expect(returnOdds([1, 9, 8, 3, 5])).to.eql([1, 9, 3, 5]);
    });
  });

  describe('returnEvens', function() {
    it('should return even numbers from an array', function() {
      expect(returnEvens([4, 7, 8, 3, 4, 6])).to.eql([4, 8, 4, 6]);
      expect(returnEvens([1, 9, 8, 3, 5])).to.eql([8]);
    });
  });

  describe('returnNumbers', function() {
    it('should return only the numbers in an array', function() {
      expect(returnNumbers([Function, 'is', 1, {constructor: 4}, ['objects'], 1, 'n', 'JS'])).to.eql([1, 1]);
    });
    it('should not keep the strings with digits in them', function() {
      expect(returnNumbers(['31', 3, 324, 'four'])).to.eql([3, 324]);
    });
  });

  describe('findMax', function() {
    it('should find max number in an array', function() {
      expect(findMax([13, 1, 6, 100])).to.eql(100);
    });
    it('should not be fooled by negative numbers', function() {
      expect(findMax([13, 1, 6, -100])).to.eql(13);
    });
  });

});