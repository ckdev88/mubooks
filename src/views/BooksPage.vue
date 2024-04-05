<script setup>
import BooksList from '../components/BooksList.vue'

import { ref, computed, reactive } from 'vue'
const countryName = ref('Brasil')
const countryNameLower = computed(() => {
	return countryName.value.toLowerCase()
})
const state = reactive({ continent: 'Europe' }) // console.log('countryName:', countryName)
// console.log('countryName:', countryName.value)
// console.log('countryNameLower:', countryNameLower.value)
// console.log('state.continent:', state.continent)

function bla() {
	console.log('blabla')
}
defineProps({
	title: {
		required: true,
		type: String
	}
})
document.getElementsByTagName
const msg = 'sadlkfjl;askjdf;lkjasdf'
</script>

<template>
	<h1>Books ({{ this.$route.name }})</h1>
	<button @click="bla">button</button>
	<div>{{msg}}</div>
	<Suspense>
		<!-- <BooksList intitle="potter" subject="magic" /> -->
		<BooksList />
		<template #fallback>Loading...</template>
	</Suspense>
</template>
