<script setup>
// import { timesTen, timesN } from '../composables/useState.js'
import { ref, onMounted, onUpdated } from 'vue'
// import { useCount } from '@/composables/useCountStore'
// import { useLoginStore } from '../stores/LoggedinStore'
import { supabase } from '../clients/supabase'
import QuoteCard from '../components/QuoteCard.vue'
import { useLoggedinStore } from '../stores/LoggedinStore'

const loggedinStore = useLoggedinStore()
console.log('store:', loggedinStore.username)

const props = defineProps({
	title: {
		type: String,
		required: false
	}
})

let currentUserEmail = ref('')

const seeCurrentUser = async () => {
	const { data, error } = await supabase.auth.getSession()
	if (data.session !== null) {
		console.log('data:', data.session)
		currentUserEmail.value = data.session.user.email
	}
	if (error) console.log('error:', error)
}
onMounted(() => {
	console.log('currentUserEmail (onMounted):', currentUserEmail)
	seeCurrentUser()
})
onUpdated(() => {
	console.log('updated!')
})
</script>
<template>
	<div>
		<!-- TODO: improve var names and not make it look like easy to hack -->
		<h1>
			<!-- Ola <span class="name">{{ loggedinStore.username }} (pinia)</span>! -->
			Ola <span class="name">{{ supabase.auth.username }} </span>!
			{{ currentUserEmail }}
		</h1>
		<QuoteCard />
		<!-- Local: {{ countStore.localCount }}<br /> -->
		<!-- <button @click="countStore.incrementLocalCount">+1</button> -->
		<!-- <hr /> -->
		<!-- <hr /> -->
		<slot counter /><br />
		<h1>{{ title }}</h1>
	</div>
</template>
<style scoped>
h1 .name {
	text-transform: capitalize;
}
</style>
