<template>
    <div>
    <v-app-bar flat app dark color="primary" >
        <div>
            <router-link to="/home" class="text-decoration-none whiteText biggerText" >Vote4Me</router-link>
        </div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="displayOnMobile"></v-app-bar-nav-icon>
        <div v-if="forLogin == 'true'" class="noDisplayOnMobile">
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >What is Vote4Me?</router-link>
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >How It Works</router-link>
            <router-link to="/" class="text-decoration-none whiteText smallerText mr-8" >Contact</router-link>
        </div>
        <div v-else class="noDisplayOnMobile">
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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
            v-model="group"
            active-class="blue--text text--accent-4">

            <div v-if="forLogin == 'true'">

                <v-list-item>
                    <v-list-item-title>What is Vote4Me?</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content><v-list-item-title>How It Works</v-list-item-title></v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content><v-list-item-title>Contact</v-list-item-title></v-list-item-content>
                </v-list-item>

            </div>

            <div v-else>

                <v-list-item link to="/vote">
                    <v-list-item-title>Vote</v-list-item-title>
                </v-list-item>

                <v-list-item link to="/dashboard">
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <v-btn router to="/"
                            rounded
                            color="accent"
                            elevation="0">
                                Sign Out
                            </v-btn>
                    </v-list-item-title>
                </v-list-item>

            </div>
            
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null
    }),
    props: {
        forLogin: {
            type: String, 
            required: false,
            default: 'false'
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style scoped>

.displayOnMobile {
    display: none
}
.whiteText {
    color: white;
}
.biggerText {
    font-size: 2em;
}
.smallerText {
    font-size: 1em;
}
@media screen and (max-width: 599px){
	.noDisplayOnMobile {
		display: none
	}
    .displayOnMobile {
        display: inherit
    }
}

</style>
