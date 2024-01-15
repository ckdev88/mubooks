<script setup>
import { ref } from 'vue'
import useCardRotate from '../../composables/useCardRotate'

const email = ref('')
</script>
<template>
	<article class="card" id="card-recover">
		<img src="/public/img/recover-icon.png" width="200" height="200" class="recover-icon" />
		<!-- 
		<div class="icon-forgot-password">
			<div class="head">
				<div class="eye"></div>
				<div class="eye"></div>
				<div class="boca"></div>
				<div class="que">?</div>

			</div>
</div> -->
		<header>Forgot your password? Don't worry. Let's get it back.</header>
		<form>
			<label for="recover-email">Email address: *</label>
			<input type="email" id="recover-email" v-model="email" required />
			<p>We'll send a link to this email if it matches an existing MuBOOKS account.</p>
			<button>Next</button>
		</form>
		<button @click="useCardRotate('recover', 'login')" class="alt">Back</button>
		<footer></footer>
	</article>
</template>
<style scoped>
.icon-forgot-password {
	height: 4rem;
	width: 4rem;
	background: transparent;
	margin: 0 auto;
	box-sizing: border-box;
}
.icon-forgot-password div {
	box-sizing: border-box;
	border-style: solid;
	border-color: black;
}
.head {
	border-width: 0.35rem;
	border-radius: 50%;
	width: 100%;
	height: 100%;
	position: relative;
	box-sizing: border-box;
}
.card .recover-icon {
	display: block;
	width: auto;
	margin: -3rem auto -3rem;
}

.eye {
	content: '.';
	position: absolute;
	top: 25%;
	font-size: 3rem;
	height: 0.4rem;
	width: 0.4rem;
	border-radius: 50%;
	background: black;
	left: 25%;
}
.eye + .eye {
	right: 25%;
	left: auto;
}
.boca {
	position: absolute;
	bottom: 0;
	width: 1rem;
	height: 1rem;
	border-width: 0.3rem 0 0;
	border-radius: 1rem 1rem 1rem 0;
	left: 50%;
	margin-left: -0.5rem;
}
.que {
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Open Sans',
		'Helvetica Neue',
		sans-serif;
	/* width: 2rem; */
	/* height: 2rem; */
	position: absolute;
	top: -0.2rem;
	right: 0;
	margin-top: -0.5rem;
	margin-right: -0.5rem;
	text-align: right;
	font-size: 2.5rem;
	font-weight: 900;
	-webkit-text-stroke: 3px;
	-webkit-text-fill-color: black;
	-webkit-text-stroke-color: #f4f1ea;
	border: 0;
}
</style>
