<script setup>
import { ref } from 'vue'
import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()
let hasbooks = false
let books = []

if (muBooksStore.getSavedBooks !== false) {
	books = ref(muBooksStore.getSavedBooks.slice(0, 4))
	if (books.value.length > 0) hasbooks = true
}
</script>

<template>
	<main v-if="hasbooks" class="savedbooks deck">
		<div class="deck-container">
			<article
				class="book-cover"
				v-for="(book, index) in books"
				:key="index"
				@click="$router.push({ name: 'savedbooks' })"
				:style="index ? 'z-index:' + (10 - index) : 'z-index:10'"
			>
				<div>
					<img :src="book.image" :alt="book.title" />
				</div>
			</article>
		</div>
	</main>

	<main v-else @click="$router.push({ name: 'search' })">
		<aside>
			<button>
				<img src="/img/save-books-icon.png" @click="$router.push({ name: 'search' })" />
			</button>
		</aside>
		Let's start saving books.
	</main>
</template>
