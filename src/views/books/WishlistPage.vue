<script setup>
import { reactive } from 'vue'
import { useMuBooksStore } from '../../stores/MuBooksStore'

const muBooksStore = useMuBooksStore()
const state = reactive({
	books: muBooksStore.getWishlist
})
console.log(state.booklist)

function removeFromWishlist(index, book) {
	// TODO: is duplicate, but slightly improved (duplicate at least in searchpage.vue)
	state.books.splice(index, 1)

	// modify pinia store & localstorage: [i].onWishlist=false
	muBooksStore.removeBookWishlist(book)
}
</script>
<template>
	<h1>Wishlist</h1>
	<p>Books I'm hoping to read soon.</p>
	<main class="wishlist">
		<article class="book-summary" v-for="(book, index) in state.books" :key="index">
			<aside class="cover"><img :src="book.image" /></aside>
			<div style="align-items: center">
				<header>
					<div class="in-short">
						<h2>
							{{ book.title }}
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
