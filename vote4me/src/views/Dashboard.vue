<template>
	<div class="dashboard" style="max-width: 2000px;">  
		<Navbar/>
		<v-container style="height: 60vh;">
			<h1 style="font-weight: 400; font-size: 2.5rem;">Dashboard</h1>
            <div class="voteStatus">
                <p style="font-size: 1.5rem; margin-bottom: 0px;">Vote Status: <span v-bind:class="{redText: notFound, yellowText: submitted, greenText: confirmed}">{{$store.state.voteStatus}}</span></p>
            </div>
            <!-- <div class="dashboardInfo">
                <p style="font-size: 1.5rem; margin-bottom: 0px;">Election Details</p>
            </div> -->
		</v-container>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'

export default {
	components: {
		Navbar,
	},
    computed: {
        notFound() {
            if (this.$store.state.voteStatus == 'Ballot not found') {
                return true
            }
            return false
        },
        submitted() {
            if (this.$store.state.voteStatus == 'Submitted') {
                return true
            }
            return false
        },
        confirmed() {
            if (this.$store.state.voteStatus != '' && this.$store.state.voteStatus != 'Ballot not found' && this.$store.state.voteStatus != 'Submitted') {
                return true
            }
            return false
        }
    }
}
</script>

<style scoped>
    .voteStatus {
        margin-top: 15px;
        background-color: #efefef;
        padding: 20px;
        border-style: hidden;
        border-radius: 7px;
        min-width: 300px;
    }
    .redText {
        color: red;
    }
    .yellowText {
        color: #e8b923;
    }
    .greenText {
        color: green;
    }
    .dashboardInfo {
        margin-top: 30px;
        background-color: #efefef;
        padding: 20px;
        border-style: hidden;
        border-radius: 7px;
        height: 100%;
        min-width: 330px;
    }
</style>