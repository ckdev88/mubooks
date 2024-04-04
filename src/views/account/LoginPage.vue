<script setup>
import { ref, watch, onMounted } from 'vue'
import LoginCard from '../../components/account/LoginCard.vue'
import SignupCard from '../../components/account/SignupCard.vue'
import RecoverCard from '../../components/account/RecoverCard.vue'
/* import setDraaideurHeight from '../../composables/setDraaideurHeight' */
import setDraaideurHeight from '../../composables/setDraaideurHeight.js'

onMounted(() => {
	setDraaideurHeight()
})
</script>
<template>
	<div id="welcome-logo">
		<h1>MuBooks</h1>
		<img id="welcome-logo-img" src="/img/logo.svg" />
	</div>
	<div class="cards-draaideur">
		<div class="axis">
			<LoginCard />
			<SignupCard />
			<RecoverCard />
		</div>
	</div>
	<br style="clear: both" />
	<div class="hidden">
		<br />
		<button @click="toProfile">To profile</button>
		<button @click="loginAccount">Login</button>
		<button @click="seeCurrentUser">See user</button>
		<button @click="logoutAccount">Log out</button>
		<br style="clear: both" />
		Or...<br />
		Use google auth, apple id, etc
	</div>
</template>
<style scoped>
/* superexperimenteel, later mooi maken */
h1 {
	text-align: center;
}
#welcome-logo {
	margin-bottom: 1rem;
}
#welcome-logo-img {
	max-width: 33%;
	display: block;
	margin: 0 auto;
	position: relative;
	z-index: 2;
}
</style>
