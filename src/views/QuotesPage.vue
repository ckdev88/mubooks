<script setup>
import QuoteCard from '../components/QuoteCard.vue'
</script>
<template>
	<h1>Quotes</h1>
	<Suspense>
		<QuoteCard />
		<template #fallback>Loading...</template>
	</Suspense>
</template>
