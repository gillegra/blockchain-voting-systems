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
		let ballotArray = [];
		ballotArray.push(new Ballot("Genesis", "Genesis"));
		return new Block(0, "03/01/2009", ballotArray, "0");
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
			this.blockchain.blockchain.length,
			Date.now(),
			this.readyBallots
		);

		console.log("Mining new block with " + this.readyBallots.length + " ballots...");

		this.blockchain.addNewBlock(newBlock);
		this.readyBallots = [];
	}

	checkBallotStatus(voterID) {
		for (let i = 0; i < this.readyBallots.length; i++) {
			if (this.readyBallots[i].voter == voterID) {
				// The ballot is submitted, waiting to be added to the blockchain
				return "Submitted";
			}
		}

		for (let i = 0; i < this.blockchain.blockchain.length; i++) {
			for (let j = 0; j < this.blockchain.blockchain[i].data.length; j++) {
				if (this.blockchain.blockchain[i].data[j].voter == voterID){
					// The ballot is on the blockchain
					return "Confirmed on Blockchain in Block " + 
						this.blockchain.blockchain[i].index;
				}
				
			}
		}

		// Else, if not found in either the readyBallots or the blockchain
		return "Ballot not found";
	}
}

export {Ballot, Block, Blockchain, Controller};
