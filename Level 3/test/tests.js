describe('Week-2-Assessment', function() {
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
});