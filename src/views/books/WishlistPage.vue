<script setup>
import { reactive, ref } from 'vue'
import { useMuBooksStore } from '../../stores/MuBooksStore'

const hasbooks = ref(false)
const muBooksStore = useMuBooksStore()
const state = reactive({
	books: muBooksStore.getWishlist
})

if (state.books.length > 0) hasbooks.value = true

// console.log(books)
function removeFromWishlist(index, book) {
	// TODO: is duplicate, but slightly improved (duplicate at least in searchpage.vue)
	state.books.splice(index, 1)

	// modify pinia store & localstorage: [i].onWishlist=false
	muBooksStore.removeBookWishlist(book)
	console.log(state.books.length)
	if (state.books.length === 0) hasbooks.value = false
}
</script>
<template>
	<h1>Wishlist</h1>
	<p>Books I will read read soon.</p>
	<main class="wishlist" v-if="hasbooks">
		<article class="book-summary" v-for="(book, index) in state.books" :key="index">
			<aside class="cover"><img :src="book.image" /></aside>
			<div style="align-items: center">
				<header>
					<div class="in-short">
						<h2>
							{{ book.title_short }}
							<sub
								><span v-for="(author, index2) in book.authors" :key="index2"
									>{{ author }}<br /> </span
							></sub>
						</h2>
					</div>
				</header>
				<footer>
					<div class="mark">
						<a @click="removeFromWishlist(index, book)">
							<span class="icon icon-remove"></span>
						</a>
					</div>
				</footer>
			</div>
		</article>
	</main>
	<main v-else>
		<h4>No books on my wishlist yet.</h4>
		<p>Select a book from Mu Books or use the search.</p>
		<button class="wauto mr1" @click="$router.push({ name: 'savedbooks' })">Mu Books</button>
		<button class="wauto" @click="$router.push({ name: 'search' })">Search</button>
	</main>
</template>
<style scoped>
.book-summary {
	align-items: center;
	display: flex;
}
h2 {
	font-size: 1.2rem;
}
footer {
	position: absolute;
	margin-top: 1rem;
}
</style>
