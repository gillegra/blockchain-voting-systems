<template>
    <div class="login" style="height: 100vh; max-width: 2000px;">
        <Navbar forLogin='true'></Navbar>
        <h1>This is the login page</h1>
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
