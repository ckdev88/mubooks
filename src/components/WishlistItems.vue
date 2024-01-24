<script setup>
import { ref } from 'vue'
import { useMuBooksStore } from '../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()
let hasbooks = false
let books = ref(muBooksStore.getWishlist.slice(0, 4))
if (books.value.length > 0) {
	hasbooks = true
}
</script>

<template>
	<main v-if="hasbooks" class="wishlist deck">
		<div class="deck-container">
			<article
				class="book-cover"
				v-for="(book, index) in books"
				:key="index"
				@click="$router.push({ name: 'wishlist' })"
				:style="index ? 'z-index:' + (10 - index) : 'z-index:10'"
			>
				<div>
					<img :src="book.image" :alt="book.title" />
				</div>
			</article>
		</div>
	</main>
	<main v-else @click="$router.push({ name: 'savedbooks' })">
		<aside>
			<button><img src="/img/icon-wishlist.png" /></button>
		</aside>
		Next in line.
	</main>
</template>
