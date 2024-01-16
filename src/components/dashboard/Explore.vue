<script setup>
import { onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()
console.log('router:', router)

function goExplore() {
	console.log('go zoek boek')
	router.push('explore')
}
onMounted(() => {
	console.log('mounted')
})
</script>
<template>
	<article class="adder alt">
		<header>Let's go straight to explore them books!</header>
		<aside>
			<img src="/img/explore.png" alt="Explore" @click="goExplore" />
			<RouterLink to="explore">Find a book</RouterLink>
		</aside>
	</article>
</template>
<style scoped>
img {
	margin: 0 auto;
	height: 4rem;
	width: auto;
	display: block;
}
</style>
