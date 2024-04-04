<script setup>
import QuoteCard from '../components/QuoteCard.vue'
import { useAuthStore } from '../stores/AuthStore'

const authStore = useAuthStore()

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
			Ola <span class="name"> {{ authStore.screenname }} </span>!
		</h1>
		<RouterLink to="login" v-if="!authStore.username">Want to log in?</RouterLink>
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
