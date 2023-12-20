<script setup>
import { timesTen, timesN } from '../composables/useState.js'
import { computed, onMounted, onUnmounted, reactive } from 'vue'
import { useCount } from '@/composables/useCountStore'

const countStore = useCount()

// console.l g(bla)
const props = defineProps({
	title: {
		type: String,
		required: false
	}
})

const state = reactive({
	content: 'content hierzo',
	x10: 50,
	test2: timesTen(50).outcome,
	localCount: countStore.localCount.value
})

const getTimesTen = (n) => {
	return timesTen(n)
}

const getN = (n) => {
	return timesN(n)
}
const add = () => {
	state.test2 += 10
}

const regionNameUppercase = computed(() => {
	if (props.title) return props.title.toUpperCase()
})
countStore.incrementLocalCount()

onMounted(() => {
	state.localCount += 1
})
onUnmounted(() => {
	console.log('unmounted homepage')
})
</script>

<template>
	<div>
		<h1>Home ({{ this.$route.name }})</h1>
		Local: {{ countStore.localCount }}<br />
		<button @click="countStore.incrementLocalCount">+1</button>
		<hr />
		<hr />
		<slot counter /><br />
		{{ state.regionName }}
		region name uppercase: {{ regionNameUppercase }}<br />
		<h1>{{ title }}</h1>
		{{ getTimesTen(3).outcome }}
		{{ getN(9).outcome }}
		<p>-- {{ state.test2 }} ==</p>
		{{ state.x10 }}<br />
		<button @click="add">add x10</button><br />
		<slot subtitel />
		<p>{{ content }}</p>
	</div>
</template>
