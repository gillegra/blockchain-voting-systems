<template>
    <div class="election">
        <h1 style="font-weight: 400; font-size: 2.5rem; margin-bottom: 40px;">Select an election to vote in:</h1>
        <v-card style="width: 100%;">
            <v-list>
            <v-list-item-group>
                <v-list-item v-for="election in elections" :key="election.name">
                    <v-list-item-content>
                        <v-list-item-title>{{election.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>

import Elections from '@/json/elections.json'

export default {
    data: function() {
        return {
            elections: Elections,
            chosenElection: ""
        }
    },
    props: {

    },
}
</script>

<style scoped>

</style>
