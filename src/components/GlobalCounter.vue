<script setup>
// TODO: make useful or remove
import { onUpdated, watch } from 'vue'
import { useCount } from './../composables/useCountStore'

useCount().incrementGlobalCount

const countStore = useCount()
watch(countStore.globalCount, (value) => {
	if (value % 2 === 0) {
		console.log('even!')
	}
})
</script>
<template>
	<p>countStore.globalCount: {{ countStore.globalCount }}</p>
	<button @click="countStore.incrementGlobalCount">+</button>
</template>
