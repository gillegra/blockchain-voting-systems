import {Ballot, Controller} from 'blockchain.js';

// For testing and demonstration

// First we'll make a controller, which starts a blockchain
let testController = new Controller();

// Next we'll create a ballot
let ballot1 = new Ballot("jane doe", 
	{
		election: "Federal",
		president: "Elon Musk"
	});

// Then we'll cast the ballot with our controller
// note- in the web implementation, we can combine the previous step
//	with this one
testController.castBallot(ballot1);

// Now we repeat the last two steps a few more times
let ballot2 = new Ballot("joe doe", 
	{
		election: "Federal",
		president: "Ada Lovelace"
	});

testController.castBallot(ballot2);

let ballot3 = new Ballot("wayne doe", 
	{
		election: "Federal",
		president: "Lex Fridman"
	});

testController.castBallot(ballot3);


// Testing the checkBallotStatus function:
console.log("Status of 'jane doe' vote: " + testController.checkBallotStatus("jane doe"));

// Once we have a few ballots, we can mine a block, adding it to
// our blockchain
testController.mineBlock();


// Here we can log the blockchain directly
console.log(JSON.stringify(testController.getBlockchain(), null, 4));


console.log("Is this chain valid: " + testController.getBlockchain().checkChainValidity());

// Testing checkBallotStatus again:
console.log("Status of 'jane doe' vote: " + testController.checkBallotStatus("jane doe"));
console.log("Status of 'joe doe' vote: " + testController.checkBallotStatus("joe doe"));
console.log("Status of 'refrigerator doe' vote: " + testController.checkBallotStatus("refrigerator doe"));
