var spy;
describe('Precourse Week 5 Assessment', function() {
  describe('sumBehind', function() {
    it('should calculate sum with postive numbers', function() {
      expect(obj.sumBehind(1)).to.eql(1);
      expect(obj.sumBehind(2)).to.eql(3);
      expect(obj.sumBehind(3)).to.eql(6);
      expect(obj.sumBehind(4)).to.eql(10);
      expect(obj.sumBehind(5)).to.eql(15);
    });
    it('should calculate sum with negative numbers', function() {
      expect(obj.sumBehind(-1)).to.eql(-1);
      expect(obj.sumBehind(-2)).to.eql(-3);
      expect(obj.sumBehind(-3)).to.eql(-6);
      expect(obj.sumBehind(-4)).to.eql(-10);
      expect(obj.sumBehind(-5)).to.eql(-15);
    });
  });
  describe('firstNonrepeatedCharacter', function() {
    it('should return first nonrepeated character', function() {
      expect(firstNonrepeatedCharacter('AB')).to.eql('A');
      expect(firstNonrepeatedCharacter('ABCD')).to.eql('A');
      expect(firstNonrepeatedCharacter('AA')).to.eql(null);
      expect(firstNonrepeatedCharacter('ABA')).to.eql('B');
      expect(firstNonrepeatedCharacter('AACBDB')).to.eql('C');
      expect(firstNonrepeatedCharacter('AACBDBDC')).to.eql(null);
    });

  });
  describe('reverseNodeOrder', function() {
    it('should reverse node order', function() {
      var div = document.createElement('div');
      var innerDiv_1 = document.createElement('div');
      innerDiv_1.setAttribute('class', '1');
      var innerDiv_2 = document.createElement('div');
      innerDiv_2.setAttribute('class', '2');
      var innerDiv_3 = document.createElement('div');
      innerDiv_3.setAttribute('class', '3');
      div.appendChild(innerDiv_1);
      div.appendChild(innerDiv_2);
      div.appendChild(innerDiv_3);
      reverseNodeOrder(div);
      var childNodes = div.childNodes;
      expect(childNodes[0]).to.be(innerDiv_3);
      expect(childNodes[1]).to.be(innerDiv_2);
      expect(childNodes[2]).to.be(innerDiv_1);
    });

  });
  describe('sumBehindRecursion', function() {
    beforeEach(function() {
      spy = sinon.spy(recursionObj, 'sumBehindRecursion');
    });
    afterEach(function() {
      recursionObj.sumBehindRecursion.restore();
      //comment this out to see what happen
    });
    it('should calculate sum with postive numbers with recursion', function() {
      expect(spy.called).to.eql(false);
      expect(recursionObj.sumBehindRecursion(1)).to.eql(1);
      expect(spy.callCount).to.be.greaterThan(0);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(2)).to.eql(3);
      expect(spy.callCount).to.be.greaterThan(1);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(3)).to.eql(6);
      expect(spy.callCount).to.be.greaterThan(2);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(4)).to.eql(10);
      expect(spy.callCount).to.be.greaterThan(3);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(5)).to.eql(15);
      expect(spy.callCount).to.be.greaterThan(4);
    });
    it('should calculate sum with negative numbers with recursion', function() {
      expect(spy.called).to.eql(false);
      expect(recursionObj.sumBehindRecursion(-1)).to.eql(-1);
      expect(spy.callCount).to.be.greaterThan(0);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(-2)).to.eql(-3);
      expect(spy.callCount).to.be.greaterThan(1);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(-3)).to.eql(-6);
      expect(spy.callCount).to.be.greaterThan(2);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(-4)).to.eql(-10);
      expect(spy.callCount).to.be.greaterThan(3);
      spy.reset();
      expect(recursionObj.sumBehindRecursion(-5)).to.eql(-15);
      expect(spy.callCount).to.be.greaterThan(4);
    });
  });

});