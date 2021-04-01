<template>
    <div class="login" style="height: calc(100vh - 64px); max-width: 2000px;">
        <Navbar forLogin='true'></Navbar>
        <v-container style="height: 100%">
			<v-row style="height: 100%" no-gutters align="center" justify="center">
				<v-col class="noDisplayOnMobile" cols="12" sm="5" align="center">
					<img src="../assets/loginArt.svg" alt="illustration of man sitting with a laptop with surrounding envelope and padlock" height="auto" width="auto"/>
				</v-col>
				<v-col cols="12" sm="5" align="center">
					<h1 style="font-size: 4rem; font-weight: 400;">Vote4Me</h1>
					<h3 style="font-size: 1.5rem; font-weight: 300;">Blockchain-based voting systems</h3>
					<p style="margin-top: 15px;">We want to make voting accessible to all people. Use our blockchain-secured platform to vote confidently and securely from anywhere, anytime!</p>
					<v-text-field 
						style="margin-top: 20px;"
						class="textFieldSize"
						label="User ID"
						rounded
						filled
					></v-text-field>
					<v-text-field
						style="margin-top: -5px;"
						class="textFieldSize"
						label="Password"
						rounded
						filled
					></v-text-field>
					<v-btn 
						router to="/home"
						class="loginButton"
						color="primary"
						elevation="0">
							Login
					</v-btn>
					<p style="margin-top: 12px;"><span style="opacity: 0.5;">New User </span><a>Register Now</a></p>
				</v-col>
			</v-row>
		</v-container>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
	name: 'Login',
	components: {
		Navbar
	}
}
</script>

<style scoped>

.textFieldSize {
	width: 80%;
	margin-right: auto;
	margin-left: auto;
}

.loginButton {
	padding: 10px;
	width: 160px;
	min-height: 40px;
	border-radius: 7px;
}

@media screen and (max-width: 599px){
	.noDisplayOnMobile {
		display: none
	}
}
</style>