<script setup>
// check if there are any saved books
// if yes, check if any of saved books are marked as reading
// if yes, router.push to saved books
// if no, router.push to saved books?
// if no, router.push to search

// import { useMuBooksStore } from '../../stores/MuBooksStore'
import { ref } from 'vue'
const boeken = ref(JSON.parse(localStorage.getItem('MyBooks')))
console.log('booklist:', boeken.value)
// const muBooksStore = useMuBooksStore()
// const readingBook = muBooksStore.getReadingBook
// console.log('readingBook:', readingBook)
</script>
<template>
	<article class="adder">
		<header @click="$router.push({ name: 'savedbooks' })">
			What I'm reading now <span>›</span>
		</header>
		<main>
			<aside>
				<button><img src="/img/plus-icon.svg" /></button>
			</aside>
			If you're already reading a book, let's add it here.
		</main>
	</article>
</template>
