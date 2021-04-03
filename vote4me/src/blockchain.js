// Blockchain implementation

const SHA256 = require('crypto-js/sha256');

class Ballot {
	constructor(voter, ballotData) {
		this.voter = voter;
		this.ballotData = ballotData;
		this.timestamp = Date.now();
	}
}

class Block {
	constructor(index, timestamp, data, prevHash=" ") {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.prevHash = prevHash;
		this.hash = this.computeHash();
		this.nonce = 0;
	}

	computeHash() {
		return SHA256(
			this.index + 
			this.prevHash +
			this. timestamp +
			JSON.stringify(this.data) +
			this.nonce
		).toString();
	}

	proofOfWork(difficulty){
		while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
			this.nonce++;
			this.hash = this.computeHash();
		}
	}
}

class Blockchain {
	constructor() {
		this.blockchain = [this.createGenesisBlock()];
		this.difficulty = 5;
	}

	createGenesisBlock() {
		return new Block(0, "03/01/2009", "Initial block in the chain", "0");
	}

	getLatestBlock() {
		return this.blockchain[this.blockchain.length - 1];
	}

	addNewBlock(newBlock) {
		newBlock.prevHash = this.getLatestBlock().hash;
		newBlock.proofOfWork(this.difficulty);
		this.blockchain.push(newBlock);
	}

	checkChainValidity() {
		for(let i = 1; i < this.blockchain.length; i++) {
			const currentBlock = this.blockchain[i];
			const prevBlock = this.blockchain[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash()){
				return false;
			}
			if (currentBlock.prevHash !== prevBlock.hash){
				return false;
			}

			return true;
		}
	}
}

class Controller {
	constructor() {
		this.blockchain = new Blockchain();
		this.readyBallots = [];
	}

	getBlockchain() {
		return this.blockchain;
	}

	castBallot(ballot) {
		console.log("Casting ballot from: " + ballot.voter);
		this.readyBallots.push(ballot);
		console.log("Ballot from " + ballot.voter + " is now cast, waiting to be mined.");
	}

	mineBlock() {
		let newBlock = new Block(
			this.blockchain.length,
			Date.now(),
			this.readyBallots
		);

		this.blockchain.addNewBlock(newBlock);
	}
}


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


// Once we have a few ballots, we can mine a block, adding it to
// our blockchain
testController.mineBlock();

// Here we can log the results
console.log(JSON.stringify(testController.getBlockchain(), null, 4));
console.log(testController.getBlockchain().checkChainValidity());


