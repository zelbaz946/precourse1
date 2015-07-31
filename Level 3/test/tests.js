describe('Level 3 Challenges...', function() {
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

  describe('applyAndEmpty', function() {
    it('should pass example', function() {
      var puzzlers = [
        function(a) { return 8 * a - 10; },
        function(a) { return (a - 3) * (a - 3) * (a - 3); },
        function(a) { return a * a + 4;},
        function(a) { return a % 5;}
      ];
      var start = 2;
      expect(applyAndEmpty(2, puzzlers)).to.eql(3);
      expect(applyAndEmpty(2, [function(a) { return 2* a; }])).to.eql(4);
    });

    it('should return original number if array is empty', function() {
      expect(applyAndEmpty(2, [])).to.eql(2);
    });

  });

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
});