import Vue from "vue";
import Vuex from "vuex";
//import {Ballot, Controller} from "@/blockchain.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		electionSelection: "",
		vote: "",
        voteStatus: "",
	},
	mutations: {
        updateElectionSelection(state, electionSelected) {
            state.electionSelection = electionSelected
        },
        updateVote(state, vote) {
            state.vote = vote
        },
        updateVoteStatus(state, voteStatus) {
            state.voteStatus = voteStatus
        }
	},
    actions: {
        updateElectionSelection(context, electionSelected) {
            context.commit("updateElectionSelection", electionSelected);
        },
        updateVote(context, vote) {
            context.commit("updateVote", vote)
        },
        updateVoteStatus(context, voteStatus) {
            context.commit("updateVoteStatus", voteStatus)
        }
    }
})

export default store