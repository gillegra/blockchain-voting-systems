<template>
    <div class="election">
        <h1 style="font-weight: 400; font-size: 2.5rem; margin-bottom: 40px;">Select a candidate:</h1>
        <v-card style="width: 100%;">
            <v-list>
                <v-list-item-group v-model="vote">
                    <v-list-item v-for="name in candidates" :key="name">
                        <v-list-item-content>
                            <v-list-item-title>{{name}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <v-btn
            @click="saveVote"
            style="margin-top: 80px; margin-left: auto; margin-right: auto;"
            class="homeButton"
            color="primary"
            elevation="0">
                Confirm
        </v-btn>
    </div>
</template>

<script>

import {Ballot, Controller} from '@/blockchain.js';

export default {
    data: function() {
        return {
            vote: "",
            electionType: this.$store.state.electionSelection,
            federalCandidates: ["Bob", "Jean", "Joe", "Phil"],
            stateCandidates: ["Greg", "Lisa", "Janet", "Joshua"],
            localCandidates: ["Paul", "Denise", "Eliza", "Cedric"]
        }
    },
    methods: {
        saveVote() {
            if (this.electionType == "Federal"){
                this.vote = this.federalCandidates[this.vote];
            }
            else if (this.electionType == "State"){
                this.vote = this.stateCandidates[this.vote]
            }
            else {
                this.vote = this.localCandidates[this.vote]
            }
            this.$store.dispatch("updateVote", this.vote)

            //this is where blockchain will be partially implemented

            let controller = new Controller();

            let ballot = new Ballot("tester",
                {
                    election: this.electionType,
                    president: this.$store.state.vote
                }
            );

            controller.castBallot(ballot)
            controller.mineBlock()
            
            this.$store.dispatch("updateVoteStatus", controller.checkBallotStatus("tester"))

            this.$emit("voteCast")
            console.log("Vote successfully cast for " + this.$store.state.vote)
        }
    },
    computed: {
        candidates() {
            if (this.electionType == "federal") {
                return this.federalCandidates
            }
            if (this.electionType == "state") {
                return this.stateCandidates
            }
            //otherwise, return the local candidates
            return this.localCandidates
        }
    }
}
</script>

<style scoped>

</style>
