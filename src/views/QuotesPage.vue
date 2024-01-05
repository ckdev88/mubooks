<script setup>
// import QuotesList from '../components/QuotesList.vue'
import QuoteCard from '../components/QuoteCard.vue'
</script>
<template>
	<h1>Quotes</h1>
	<Suspense>
		<QuoteCard />
		<template #fallback>Loading...</template>
	</Suspense>
	<li v-for="(todo, index) in filteredTodos" :key="index">{{ todo.title }} ({{ todo.id }})</li>
</template>
