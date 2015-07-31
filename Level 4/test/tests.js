var array;
describe('Level 4 Challenges...', function() {
  
  describe('sumArray', function() {
    it('should find the largest continguous sum', function() {
      expect(sumArray([1,2,3])).to.eql(6);
      expect(sumArray([1, 2, 3, -4])).to.eql(2);
      expect(sumArray([1, 2, 3, -4, 5])).to.eql(7);
      expect(sumArray([4, -1, 5])).to.eql(8);
      expect(sumArray([10,-11,11])).to.eql(11);
    });

    it('should return 0 if empty array is provided', function() {
      expect(sumArray([])).to.eql(0);
    });
  });

  describe('padArray', function() {
    it('should not modify a sufficiently long array', function() {
      expect(padArray([1, 1, 1], 2, 'corn')).to.eql([1, 1, 1]);
    });

    it('should modify an insufficiently long array', function() {
      expect(padArray([1, 1, ], 4, 'corn')).to.eql([1, 1, 'corn', 'corn']);
    });

    it('should pad array with undefined by defulat', function() {
      expect(padArray([1, 1, ], 3)).to.eql([1, 1, undefined]);
    });
  });

  describe('palindrome', function() {
    it('should return true for palindromes without punctuations', function() {
      expect(palindrome('a')).to.eql(true);
      expect(palindrome('racecar')).to.eql(true);
      expect(palindrome('helleh')).to.eql(true);
    });

    it('should return false for non-palindromes', function() {
      expect(palindrome('hello')).to.eql(false);
      expect(palindrome('there')).to.eql(false);
    });

    it('should return true for palindromes with punctuations', function() {
      expect(palindrome("Anne, I vote more cars race Rome-to-Vienna")).to.eql(true);
    });
  })

  describe('isSubsetOf', function() {
    it('should return true when set1 is subset of set2', function() {
      expect(isSubsetOf([1,2,3],[1,2,3])).to.eql(true);
      expect(isSubsetOf([1,2,3],[1,2,3,4])).to.eql(true);
    });
    it('should return false when set1 is not a subset of set2', function() {
      expect(isSubsetOf([1,2,3],[1,2]));
      expect(isSubsetOf([1,2],[1]));
    });
  });
});