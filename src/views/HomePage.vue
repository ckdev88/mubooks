<script setup>
// import { timesTen, timesN } from '../composables/useState.js'
import { ref, reactive, onMounted, onUpdated } from 'vue'
// import { useCount } from '@/composables/useCountStore'
// import { useLoginStore } from '../stores/LoggedinStore'
import { supabase } from '../clients/supabase'
import QuoteCard from '../components/QuoteCard.vue'
import { useLoggedinStore } from '../stores/LoggedinStore'

// const countStore = useCount()
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

// async function seeCurrentUser() {
// 	console.log('see current user')
// 	const { data, error } = await supabase.auth.getSession()
// 	if (error) console.log('error:', error)
// 	else console.log('data:', data)
// }
//
let currentUserEmail = ref('')
let reactiveVars = reactive({
	currentUserEmailadres: ''
})
const seeCurrentUser = async () => {
	console.log('see current user')
	// const {data,error}=await supabase.auth.getSession()
	const { data, error } = await supabase.auth.getSession()

	if (error) console.log('error:', error)
	else {
		console.log('data:', data.session.user.email)
		// currentUserEmail.value=data.session.user.email
		currentUserEmail.value = data.session.user.email
		reactiveVars.currentUserEmailadres = data.session.user.email
		console.log('currentUserEmail:', reactiveVars.currentUserEmailadres)
		// console.log('currentUserEmailRef:', currentUserEmailRef)
	}
	// const { data: { user } } = await supabase.auth.getUser()
}
onMounted(() => {
	console.log('mounted')

	console.log('currentUserEmail (mounted):', currentUserEmail)
	seeCurrentUser()
})
onUpdated(() => {
	console.log('updated!')
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
</script>
<template>
	<div>
		<!-- TODO: improve var names and not make it look like easy to hack -->
		<h1>
			<!-- Ola <span class="name">{{ loggedinStore.username }} (pinia)</span>! -->
			Ola <span class="name">{{ supabase.auth.username }} </span>!
			<button @click="seeCurrentUser">Who?</button>
			1 {{ currentUserEmailRef }} 2 {{ currentUserEmail }} 3
			{{ reactiveVars.currentUserEmailadres }} =
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
