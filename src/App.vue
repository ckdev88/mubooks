<script setup>
import { ref, watch } from 'vue'

import NavWrapper from './components/NavWrapper.vue'
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
	</header>
	<main>
		<div class="supabase-test">
			<h1>Profile</h1>
		</div>
		<RouterView />
	</main>
	<footer>
		<p>countStore.globalCount: {{ countStore.globalCount }}</p>
		<button @click="countStore.incrementGlobalCount">+</button>
	</footer>
</template>
