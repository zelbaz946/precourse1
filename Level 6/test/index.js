var deck;
describe('Precourse Part 6 Assessment', function() {
  describe('nestingNodes', function() {
    it('should nest two divs', function() {
      var outer = document.createElement('div');
      var inner = document.createElement('div');
      outer.setAttribute('class', 'outer');
      inner.setAttribute('class', 'inner');
      var testOuter = document.createElement('div');
      var testInner = document.createElement('div');
      testOuter.setAttribute('class', 'outer');
      testInner.setAttribute('class', 'inner');
      testOuter.appendChild(testInner);
      nestingNodes(outer, inner);
      expect(testOuter).to.eql(outer);
      expect(testOuter.childNodes).to.eql(outer.childNodes);
    });
    it('should nest three divs', function() {
      var obj = createNesting(3);
      nestingNodes.apply(null, obj.divs)
      checkNesting(obj.divs[0], obj.testDivs, 3);
    });
    it('should nest four divs', function() {
      var obj = createNesting(4);
      nestingNodes.apply(null, obj.divs)
      checkNesting(obj.divs[0], obj.testDivs, 4);
    });
  });

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

  describe('shuffleDeck', function() {
    it('should be 52 cards', function() {
      for (var i = 0; i < 10; i++) {
        expect(shuffleDeck(orderedDeck()).length).to.eql(52);
      }
    });
    it('should different after every shuffle', function() {
      for (var i = 0; i < 10; i++) {
        expect(shuffleDeck(orderedDeck())).to.not.eql(shuffleDeck(orderedDeck()));
      }
    });
    it('should contain all the cards', function() {
      for (var i = 0; i < 52; i++) {
        checkDeck(shuffleDeck(orderedDeck()));
      }
    })
  });
});

function createNesting(num) {
  var divs = [];
  var div;
  var testDivs;
  var testDiv;
  for (var i = 0; i < num; i++) {
    div = document.createElement('div');
    testDiv = document.createElement('div');
    div.setAttribute('class', i);
    testDiv.setAttribute('class', i);
    if (!testDivs) {
      testDivs = testDiv;
    } else {
      testDivs.appendChild(testDiv);
    }

    divs.push(div);
  }
  return {
    divs: divs,
    testDivs: testDivs
  };
}

function checkNesting(divs, testDivs, nums) {
  for (var i = 0; i < nums; i++) {
    expect(divs).to.eql(testDivs);
    divs = divs.childNodes[0];
  }
}

function checkDeck(deck) {
  var suits = {};
  var value;
  var suit;
  var test;
  for (var i = 0; i < deck.length; i++) {
    value = deck[i].slice(0,1);
    suit = deck[i].slice(1);
    if (value === '1') {
      value = '10';
      suit = deck[i].slice(2);
    }
    if (!suits[suit]) {
      suits[suit] = [];
    }
    suits[suit].push(value);
  }
  for (var suit in suits) {
    expect(suits[suit].sort()).to.eql([ 'A','2','3','4','5','6','7','8','9','10','J','Q','K' ].sort());
  }
}