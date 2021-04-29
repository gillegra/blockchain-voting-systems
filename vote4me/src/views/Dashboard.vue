<template>
	<div class="dashboard" style="max-width: 2000px;">  
		<Navbar/>
		<v-container style="height: 60vh;">
			<h1 style="font-weight: 400; font-size: 2.5rem;">Dashboard</h1>
            <div class="voteStatus">
                <p style="font-size: 1.5rem; margin-bottom: 0px;">Vote Status: </p>
            </div>
            <div class="dashboardInfo">
                <p style="font-size: 1.5rem; margin-bottom: 0px;">Election Details</p>
            </div>
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
    .voteStatus {
        margin-top: 15px;
        background-color: #efefef;
        padding: 20px;
        border-style: hidden;
        border-radius: 7px;
        width: 30%;
        min-width: 300px;
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