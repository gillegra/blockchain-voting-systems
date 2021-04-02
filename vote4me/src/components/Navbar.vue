<template>
    <v-app-bar flat app dark color="primary" >
        <div>
            <router-link to="/home" class="text-decoration-none whiteText biggerText" >Vote4Me</router-link>
        </div>
        <v-spacer></v-spacer>
        <div v-if="forLogin == 'true'">
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >What is Vote4Me?</router-link>
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >How It Works</router-link>
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >Contact</router-link>
        </div>
        <div v-else>
            <router-link to="/vote" class="text-decoration-none whiteText smallerText mr-8" >Vote</router-link>
            <router-link to="/dashboard" class="text-decoration-none whiteText smallerText mr-8" >Dashboard</router-link>
            <v-btn router to="/"
            rounded
            color="accent"
            elevation="0">
                Sign Out
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    props: {
        forLogin: {
            type: String, 
            required: false,
            default: 'false'
        }
    }
}
</script>

<style scoped>
.whiteText {
    color: white;
}
.biggerText {
    font-size: 2em;
}
.smallerText {
    font-size: 1em;
}
</style>
