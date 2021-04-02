<template>
    <div class="election">
        <h1 style="font-weight: 400; font-size: 2.5rem; margin-bottom: 40px;">Thank you for voting!</h1>
        <p style="margin-top: 15px; margin-bottom: 30px; opacity: 0.7;">You can use the Voter Dashboard to keep track of election updates and vote status.</p>
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
