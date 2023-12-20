<script setup>
import { ref } from 'vue'
import { timesTen } from './../composables/useState'
import { useCount } from './../composables/useCountStore'
let counter = ref(0)

const countStore = useCount()

console.log('countStore.globalCount.value:', countStore.globalCount.value)

// console.log('globalCount:', useCount.globalCount)

const incrementCounter1 = () => {
	counter.value = counter.value + 1
	counter.value = counter.value + timesTen(1).outcome
	return counter.value
}
const decrementCounter1 = () => {
	counter.value--
	counter.value = counter.value - timesTen(1).outcome
	return counter.value
}
</script>

<template>
	<h1>Counter</h1>
	<h2>{{ counter }}</h2>
	<button @click="incrementCounter1">+1</button>
	<button @click="decrementCounter1">-1</button>

	<h2>Global count: {{ countStore.globalCount }}</h2>
	<button @click="countStore.incrementGlobalCount">global +1</button>
	<button @click="countStore.resetGlobalCount">global 0</button>
</template>
