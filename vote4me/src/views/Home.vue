<template>
	<div class="home" style="height: calc(100vh - 64px); max-width: 2000px;">  
		<Navbar/>
		<v-container style="height: 100%">
			<v-row style="height: 100%" no-gutters align="center" justify="center">
				<v-col cols="12" sm="6" align="start">
					<h1 style="font-size: 2rem; font-weight: 400;">Welcome to Vote4Me, <br> the blockchain-based voting application</h1>
					<p style="margin-top: 15px; margin-bottom: 30px; opacity: 0.7;">From here, you can either cast a vote, or check your voter dashboard for up-to-date election information and voting status.</p>
					<v-btn 
						router to="/vote"
						class="homeButton mr-5"
						color="primary"
						elevation="0">
							Vote
					</v-btn>
					<v-btn 
						router to="/dashboard"
						class="homeButton"
						color="primary"
						elevation="0">
							Dashboard
					</v-btn>
				</v-col>
				<v-col class="noDisplayOnMobile" cols="12" sm="6" align="center">
					<img src="../assets/homeArt.svg" alt="illustration of man sitting with a laptop with surrounding envelope and padlock" height="auto" width="auto"/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
	components: {
		Navbar,
	}
}
</script>

<style scoped>

.homeButton {
	width: 130px;
	border-radius: 7px;

}

@media screen and (max-width: 599px){
	.noDisplayOnMobile {
		display: none
	}
}
</style>