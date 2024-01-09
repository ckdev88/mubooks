<script setup>
import QuoteCard from '../components/QuoteCard.vue'
import { useAuthStore } from '../stores/AuthStore'

const loggedinStore = useAuthStore()
console.log('loggedinStore.username (from HomePage.vue):', loggedinStore.username)

const props = defineProps({
	title: {
		type: String,
		required: false
	}
})
</script>
<template>
	<div>
		<!-- TODO: improve var names and not make it look like easy to hack -->
		<h1>
			Ola <span class="name"> {{ loggedinStore.username }} </span>!
		</h1>
		<RouterLink to="login" v-if="!loggedinStore.username">Want to log in?</RouterLink>
		<QuoteCard />
		<!-- Local: {{ countStore.localCount }}<br /> -->
		<!-- <button @click="countStore.incrementLocalCount">+1</button> -->
		<slot counter /><br />
		<h1>{{ title }}</h1>
	</div>
</template>
<style scoped>
h1 .name {
	text-transform: capitalize;
}
</style>
