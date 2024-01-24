<script setup>
import { ref } from 'vue'
import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

let hasbooks = false
let books = []

if (muBooksStore.getReadingBook !== false) {
	books = ref(muBooksStore.getReadingBook)
	if (books.value.length > 0) hasbooks = true
}
</script>

<template>
	<main v-if="hasbooks" class="readingnow">
		<article class="book-summary" v-for="(book, index) in books">
			<aside class="cover"><img :src="book.image" /></aside>
			<div class="in-short">
				<h2>{{ book.title }}</h2>
			</div>
		</article>
	</main>
	<main v-else @click="$router.push({ name: 'search' })">
		<aside>
			<button><img src="/img/plus-icon.svg" /></button>
		</aside>
		If you're already reading a book, let's add it here.
	</main>
</template>
