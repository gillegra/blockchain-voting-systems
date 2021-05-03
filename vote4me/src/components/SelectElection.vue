<template>
    <div class="election">
        <h1 style="font-weight: 400; font-size: 2.5rem; margin-bottom: 40px;">Select an election to vote in:</h1>
        <v-card style="width: 100%;">
            <v-list>
            <v-list-item-group v-model="electionSelection">
                <v-list-item v-for="election in elections" :key="election">
                    <v-list-item-content>
                        <v-list-item-title>{{election}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
        <v-btn
            @click="updateElectionSelection"
            style="margin-top: 80px; margin-left: auto; margin-right: auto;"
            class="homeButton"
            color="primary"
            elevation="0">
                Confirm
        </v-btn>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            elections: ["Election One (Federal Election)", "Election Two (State Election)", "Election Three (Local Election)"],
            electionSelection: ""
        }
    },
    methods: {
        updateElectionSelection() {
            if (this.electionSelection === 0) {
                this.electionSelection = "Federal"
            }
            if (this.electionSelection === 1) {
                this.electionSelection = "State"
            }
            if (this.electionSelection === 2) {
                this.electionSelection = "Local"
            }
            this.$store.dispatch("updateElectionSelection", this.electionSelection)
            console.log(this.$store.state.electionSelection)
            this.$emit("electionSelected")
        }
    }
}
</script>

<style scoped>

</style>
