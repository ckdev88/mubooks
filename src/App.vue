<script setup>
import { watch } from 'vue'
import NavWrapper from './components/NavWrapper.vue'
import ProfileStatus from './components/ProfileStatus.vue'
import { useCount } from './composables/useCountStore'

useCount().incrementGlobalCount
const countStore = useCount()
watch(countStore.globalCount, (value) => {
	if (value % 2 === 0) {
		console.log('even!')
	}
})
</script>

<template>
	<header>
		<NavWrapper />
		<!-- <ProfileStatus /> -->
	</header>
	<main>
		<RouterView />
	</main>
	<footer>
		<p>countStore.globalCount: {{ countStore.globalCount }}</p>
		<button @click="countStore.incrementGlobalCount">+</button>
	</footer>
</template>
