<script setup>
import { ref, reactive } from 'vue'
import { useMuBooksStore } from '../../stores/MuBooksStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const hasbooks = ref(false)
const muBooksStore = useMuBooksStore()
const state = reactive({
	books: muBooksStore.getFavorites
})

if (state.books.length > 0) hasbooks.value = true

function removeFromFavorites(index, book) {
	// TODO: is duplicate, but slightly improved (duplicate at least in searchpage.vue)
	state.books.splice(index, 1)

	// modify pinia store & localstorage: [i].isFavorite=false
	muBooksStore.removeBookFavorites(book)
	if (state.books.length === 0) hasbooks.value = false
}
function goSearch() {
	router.push('search')
}
function goSavedbooks() {
	router.push({ name: 'savedbooks' })
}
</script>
<template>
	<h1>Favorites</h1>
	<p>My beloved favorite books.</p>
	<main class="favorites" v-if="hasbooks">
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
						<a @click="removeFromFavorites(index, book)">
							<span class="icon icon-remove"></span>
						</a>
					</div>
				</footer>
			</div>
		</article>
	</main>
	<main v-else>
		<h4>No books marked as favorite yet.</h4>
		<p>Select and mark your favorite book from Mu Books or use the search.</p>
		<button class="wauto mr1" @click="goSavedbooks">Mu Books</button>
		<button class="wauto" @click="goSearch">Search</button>
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
