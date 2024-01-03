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
		<p>countStore.globalCount: {{ countStore.globalCount }}</p>
		<ProfileStatus />
		<button @click="countStore.incrementGlobalCount">+</button>
		<NavWrapper />
	</header>
	<main>
		<RouterView />
	</main>
</template>

<style scoped>
header {
	line-height: 1.5;
	display: block;
}
</style>
