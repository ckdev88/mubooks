<script setup>
import { timesTen, timesN } from '../composables/useState.js'
import { computed, onMounted, onUnmounted, reactive } from 'vue'
import { useCount } from '@/composables/useCountStore'
// import { useLoginStore } from '../stores/LoggedinStore'

import QuoteCard from '../components/QuoteCard.vue'
import { useLoggedinStore } from '../stores/LoggedinStore'

const countStore = useCount()
// const loggedin = useLoginStore()
// console.log('loggedin:', loggedin)
// console.l g(bla)
const loggedinStore = useLoggedinStore()
console.log('store:', loggedinStore.username)
// console.log('store.Loggedin:', store.Loggedin.username)
const props = defineProps({
	title: {
		type: String,
		required: false
	}
})

// const state = reactive({
// 	content: 'content hierzo',
// 	x10: 50,
// 	test2: timesTen(50).outcome,
// 	localCount: countStore.localCount.value
// })

// const getTimesTen = (n) => {
// 	return timesTen(n)
// }

// const getN = (n) => {
// 	return timesN(n)
// }
// const add = () => {
// 	state.test2 += 10
// }

// countStore.incrementLocalCount()
//
// onMounted(() => {
// 	state.localCount += 1
// })
// onUnmounted(() => {
// 	console.log('unmounted homepage')
// })
</script>

<template>
	<div>
		<!-- TODO: improve var names and not make it look like easy to hack -->
		<h1>
			Ola <span class="name">{{ loggedinStore.username }}</span
			>!
		</h1>
		<QuoteCard />
		<!-- Local: {{ countStore.localCount }}<br /> -->
		<!-- <button @click="countStore.incrementLocalCount">+1</button> -->
		<!-- <hr /> -->
		<!-- <hr /> -->
		<!-- <slot counter /><br /> -->
		<h1>{{ title }}</h1>
		<!-- {{ getTimesTen(3).outcome }} -->
		<!-- {{ getN(9).outcome }} -->
		<!-- <p>-- {{ state.test2 }} ==</p> -->
		<!-- {{ state.x10 }}<br /> -->
		<!-- <button @click="add">add x10</button><br /> -->
		<!-- <p>{{ content }}</p> -->
	</div>
</template>
<style scoped>
h1 .name {
	text-transform: capitalize;
}
</style>
