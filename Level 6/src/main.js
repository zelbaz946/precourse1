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
	//CODE HERE

}


//takes a string in JSON format and converts it to a javascript object
function jsonParse(string) {
	//CODE HERE
	
}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
	//CODE HERE

}


// returns a randomly shuffled version of a 52 card playing deck. The input will be an ordered 52 card deck (the output of ordered deck);
function shuffleDeck(deck) {
	//CODE HERE

}


// Ordered deck generator provided for your testing convenience
// DO NOT modify this function. It exists for testing purpose, only.
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



