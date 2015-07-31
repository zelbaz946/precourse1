var array;
describe('Precourse Week 4 Assessment', function() {
  describe('createArray', function() {
    beforeEach(function() {
      array = new createArray();
    });
    it('should have push and pop method', function() {
      expect(array).to.have.property('push');
      expect(array.push).to.be.a('function');
      expect(array).to.have.property('pop');
      expect(array.pop).to.be.a('function');
    });

    it('should push and pop single value', function() {
      array.push(0);
      expect(array.pop()).to.be(0);
    });

    it('should push and pop multiple values', function() {
      array.push(0);
      array.push(1);
      array.push(2);
      expect(array.pop()).to.be(2);
      expect(array.pop()).to.be(1);
      expect(array.pop()).to.be(0);
    });

    it('should have shift and unshift method', function() {
      expect(array).to.have.property('shift');
      expect(array.shift).to.be.a('function');
      expect(array).to.have.property('unshift');
      expect(array.unshift).to.be.a('function');
    });

    it('should unshift and shift single value', function() {
      array.unshift(0);
      expect(array.shift()).to.be(0);
    });

    it('should unshift and shift multiple values', function() {
      array.unshift(0);
      array.unshift(1);
      array.unshift(2);
      expect(array.shift()).to.be(2);
      expect(array.shift()).to.be(1);
      expect(array.shift()).to.be(0);
    });
  });

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
});