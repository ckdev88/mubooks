<script setup>
import ReadingItem from './ReadingItem.vue'
// check if there are any saved books
// if yes, check if any of saved books are marked as reading
// if yes, router.push to saved books
// if no, router.push to saved books?
// if no, router.push to search

// import { useMuBooksStore } from '../../stores/MuBooksStore'
// const muBooksStore = useMuBooksStore()
// const readingBook = muBooksStore.getReadingBook
// console.log('readingBook:', readingBook)
</script>
<template>
	<article class="adder">
		<header @click="$router.push({ name: 'savedbooks' })">
			What I'm reading now <span>›</span>
		</header>
		<ReadingItem />
	</article>
</template>
