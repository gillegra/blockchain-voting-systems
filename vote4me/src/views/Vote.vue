<template>
	<div class="vote mt-8" style="max-width: 2000px;">  
		<Navbar />
		<v-container>
            <div style="max-width: 750px" v-if="this.$route.path == '/vote'">
                <SelectElection @electionSelected="advanceUser"/>
            </div>
            <div style="max-width: 750px" v-if="this.$route.path == '/vote/castvote'">
                <CastVote @voteCast="advanceUser"/>
            </div>
            <div style="max-width: 750px" v-if="this.$route.path == '/vote/thankyou'">
                <ThankYouForVoting />
            </div>
            <!-- <v-btn v-if="this.$route.path != '/vote/thankyou'"
                @click="advanceUser"
                style="margin-top: 80px; margin-left: auto; margin-right: auto;"
                class="homeButton"
                color="primary"
                elevation="0">
                    Confirm
            </v-btn> -->
		</v-container>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import SelectElection from '@/components/SelectElection.vue'
import CastVote from '@/components/CastVote.vue'
import ThankYouForVoting from '@/components/ThankYouForVoting.vue'
//import {Ballot, Block, Blockchain, Controller} from '@/blockchain.js';

export default {
	components: {
		Navbar, SelectElection, CastVote, ThankYouForVoting
	},
    methods: {
        advanceUser() {
            switch (this.$route.path) {
                case "/vote": 
                    this.$router.push({path: "/vote/castvote"})
                    break
                case "/vote/castvote":
                    this.$router.push({path: "/vote/thankyou"})
                    window.scrollTo(0, 0)
                    break
                case "/vote/thankyou":
                    this.$router.push({path: "/home"})
                    window.scrollTo(0, 0)
                    break
                default:
                    break
            }
        }
    }
}
</script>