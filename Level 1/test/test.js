describe('Unit 1 Challenges...', function() {
  describe('addTwo', function() {
    it('should add two to inputted number', function() {
      expect(addTwo(0)).to.eql(2);
      expect(addTwo(1)).to.eql(3);
      expect(addTwo(2)).to.eql(4);
      expect(addTwo(-1)).to.eql(1);
    });
  });

  describe('add', function() {
    it('should add two numbers', function() {
      expect(add(5,10)).to.eql(15);
      expect(add(5,6)).to.eql(11);
      expect(add(0,0)).to.eql(0);
      expect(add(-1,1)).to.eql(0);
    });
  });

  describe('addd', function() {
    it('should add three numbers', function() {
      expect(addd(1,2,3)).to.eql(6);
      expect(addd(1,2,4)).to.eql(7);
      expect(addd(1,2,5)).to.eql(8);
    });
  });

  describe('subtract', function() {
    it('should subtract two numbers', function() {
      expect(subtract(5,10)).to.eql(-5);
      expect(subtract(5,6)).to.eql(-1);
      expect(subtract(0,0)).to.eql(0);
      expect(subtract(-1,1)).to.eql(-2);
    });
  });

  describe('multiplyByTwo', function() {
    it('should multiply inputted number by two', function() {
      expect(multiplyByTwo(1)).to.eql(2);
      expect(multiplyByTwo(2)).to.eql(4);
      expect(multiplyByTwo(3)).to.eql(6);
      expect(multiplyByTwo(4)).to.eql(8);
      expect(multiplyByTwo(0)).to.eql(0);
      expect(multiplyByTwo(-1)).to.eql(-2);
    });
  });

  describe('multiply', function() {
    it('should multiply two numbers', function() {
      expect(multiply(1,2)).to.eql(2);
      expect(multiply(2,2)).to.eql(4);
      expect(multiply(3,2)).to.eql(6);
      expect(multiply(3,3)).to.eql(9);
    });
  });

  describe('square', function() {
    it('should square positive numbers', function() {
      expect(square(1)).to.eql(1);
      expect(square(2)).to.eql(4);
      expect(square(3)).to.eql(9);
      expect(square(4)).to.eql(16);
      expect(square(5)).to.eql(25);
    });

    it('should square negative numbers', function() {
      expect(square(-1)).to.eql(1);
      expect(square(-2)).to.eql(4);
      expect(square(-3)).to.eql(9);
      expect(square(-4)).to.eql(16);
      expect(square(-5)).to.eql(25);
    });
  });

  describe('isOdd', function() {
    it('should return true for odd numbers', function() {
      expect(isOdd(2)).to.eql(false);
      expect(isOdd(4)).to.eql(false);
      expect(isOdd(6)).to.eql(false);
      expect(isOdd(8)).to.eql(false);
    });

    it('should return false for event numbers', function() {
      expect(isOdd(1)).to.eql(true);
      expect(isOdd(3)).to.eql(true);
      expect(isOdd(5)).to.eql(true);
      expect(isOdd(7)).to.eql(true);
    });
  });

  describe('isEven', function() {
    it('should return true for even numbers', function() {
      expect(isEven(2)).to.eql(true);
      expect(isEven(4)).to.eql(true);
      expect(isEven(6)).to.eql(true);
      expect(isEven(8)).to.eql(true);
    });

    it('should return false for false numbers', function() {
      expect(isEven(1)).to.eql(false);
      expect(isEven(3)).to.eql(false);
      expect(isEven(5)).to.eql(false);
      expect(isEven(7)).to.eql(false);
    });
  });

  describe('isPositive', function() {
    it('should return true for positive numbers', function() {
      expect(isPositive(1)).to.eql(true);
      expect(isPositive(2)).to.eql(true);
      expect(isPositive(3)).to.eql(true);
    });

    it('should return false for negative numbers', function() {
      expect(isPositive(-1)).to.eql(false);
      expect(isPositive(-2)).to.eql(false);
      expect(isPositive(-3)).to.eql(false);
    });

    it('should return false for zero', function() {
      expect(isPositive(0)).to.eql(false);
    });
  });

  describe('isNegative', function() {
    it('should return true for negative numbers', function() {
      expect(isNegative(-1)).to.eql(true);
      expect(isNegative(-2)).to.eql(true);
      expect(isNegative(-3)).to.eql(true);
    });

    it('should return false for positive numbers', function() {
      expect(isNegative(1)).to.eql(false);
      expect(isNegative(2)).to.eql(false);
      expect(isNegative(3)).to.eql(false);
    });

    it('should return false for zero', function() {
      expect(isNegative(0)).to.eql(false);
    });
  });

  describe('positive', function() {
    it('should return only the positive value of the number', function() {
      expect(positive(-1)).to.eql(1);
      expect(positive(1)).to.eql(1);
    });
  });

  describe('negative', function() {
    it('should return only the negative value of the number', function() {
      expect(negative(1)).to.eql(-1);
      expect(negative(-1)).to.eql(-1);
    });
  });
});