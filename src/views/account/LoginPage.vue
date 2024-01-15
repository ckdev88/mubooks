<script setup>
import { ref, watch, onMounted } from 'vue'
import LoginCard from '../../components/account/LoginCard.vue'
import SignupCard from '../../components/account/SignupCard.vue'
</script>
<template>
	<div id="welcome-logo">
		<!-- <img id="welcome-logo1" src="../../../../public/img/mubook-logo.png" /> -->
		<!-- <img id="welcome-logo2" src="../../../../public/img/mubook.png" /> -->
		<img id="welcome-logo-img" src="/public/img/mubook-logo-large.png" />
	</div>
	<div class="cards-draaideur">
		<div class="axis">
			<LoginCard />
			<SignupCard />
		</div>
	</div>
	<br style="clear: both" />
	<div class="hidden">
		<br />
		<button @click="toPrefs">To preferences</button>
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
#welcome-logo-img {
	max-width: 75%;
	display: block;
	margin: 0 auto;
	position: relative;
	margin-bottom: -2.5rem;
	z-index: 2;
}
</style>
