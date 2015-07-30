// accepts a variable number of parameters. Nests the nodes within one another
// nestingNodes(<div class="outer"></div>,<div class="inner"></div>);
// <div class="outer"><div class="inner"></div></div>
// nestingNodes(<div class="outer"></div>,<div class="middle"></div>,<div class="inner"></div>);
// <div class="outer">
//  <div class="center">
//    <div class="inner">
//    </div>
//   </div>
// </div>
function nestingNodes() {

}


// returns true if the first set is a subset of the second set
// isSubsetOf([1,2,3],[1,2,3,4]); -> true
// isSubsetOf([1,2,3],[1,2]); -> false
function isSubsetOf(set1, set2) {

}

// returns a randomly shuffled version of a 52 card playing deck. The input will be an ordered 52 card deck (the output of ordered deck);
function shuffleDeck(deck) {

}

// Ordered deck generator provided for your testing convenience
function orderedDeck() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
}
