<script setup>
import { useRoute } from 'vue-router'

// const user = await fetch('https://jsonplaceholder.typicode.com/users/7').then((res) => res.json())
const user = {
	name: {
		first: 'Carmen',
		last: 'Miranda'
	},
	pet: 'Dog',
	food: 'Lasagne'
}

const route = useRoute()
</script>
<template>
	<div>
		<h2>Allo?</h2>
		{{ user }}
		<!-- <h1>{{ user.name.first }} {{ user.name.last }}</h1> -->
		<!-- <div v-if="user.pet">Pets: {{ user.pet }}<br /></div> -->
		<!-- <div v-if="user.food">Food: {{ user.food }}<br /></div> -->
	</div>
</template>
