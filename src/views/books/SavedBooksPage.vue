<script setup>
import { reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

import { useMuBooksStore } from '../../stores/MuBooksStore'
import { useAlertStore } from '../../stores/AlertStore'

const muBooksStore = useMuBooksStore()

const alertStore = ref(useAlertStore())

const state = reactive({
	books: muBooksStore.getSavedBooks,
	resultCount: 0,
	isSearched: false,
	resultsWarning: null,
	hasbooks: false
})
state.resultsWarning = null

function toggleFavBook(index, book) {
	// TODO: dit hoort in de store MuBooksStore, als action & getter, reactivity is een issue
	// if (state.books[index].saved === true) {
	muBooksStore.removeMyBook(book)
	// console.log('removing book')
	state.books[index].saved = !state.books[index].saved
}

function addToWishlist(index, book) {
	// TODO: is duplicate, also at least in searchpage.vue
	// save book first
	if (state.books[index].saved === false) toggleFavBook(index, book, true) // TODO: is true hier
	// nodig als 3e argument?

	// modify state.books: saved: true
	state.books[index].onWishlist = true
	// modify pinia store & localstorage: [i].onWishlist=true
	muBooksStore.addBookWishlist(book)
}

function addToFavorites(index, book) {
	if (state.books[index].saved === false) {
		toggleFavBook(index, book)
	}
	state.books[index].isFavorite = true
	muBooksStore.addBookFavorites(book)
}

function removeFromFavorites(index, book) {
	// TODO: is duplicate, also at least in searchpage.vue
	console.log('remove from favorites')
	// modify state.books
	state.books[index].isFavorite = false

	// modify pinia store & localstorage
	muBooksStore.removeFromFavorites(book)

	// let myBooks = JSON.parse(localStorage.getItem('MyBooks')
}
function markAsReading(index, book) {
	// edit local reactive arr
	if (state.books[index].saved === false) toggleFavBook(index, book)

	// turn on reading
	if (state.books[index].reading === false) {
		for (let i = 0; i < state.books.length; i++) {
			state.books[i].reading = false
		}
		state.books[index].reading = !state.books[index].reading
		if (state.books[index].reading === true) state.books[index].finished = false
	}

	// edit localstorage
	if (state.books[index].reading === true) {
		muBooksStore.addBookReading(index)
	}
}
function markAsRead(index, book) {
	state.books[index].finished = true
	state.books[index].reading = false
	//edit localstorage
}
function removeBook(index) {
	// console.log('remove book from state using index')
	// state.books.splice(index, 1)

	// console.log('remove book from localstorage using book')
	muBooksStore.removeMyBook(index)
	state.books.boeken = muBooksStore.getSavedBooks
	if (state.books.boeken.length === 0) hasbooks = false
	state.books.splice(index, 1)
}

let hasbooks = ref(false)
let books = []

if (muBooksStore.getSavedBooks !== false) {
	books = ref(muBooksStore.getSavedBooks)
	if (books.value.length > 0) hasbooks = true
	else hasbooks = false
}
if (hasbooks.value === undefined) state.hasbooks = false
</script>

<template>
	<h1>My Books</h1>
	<p>
		An overview of my saved books, this includes books that are favorited, read and finished,
		the wishlist and the book currently reading.
	</p>
	<div v-if="hasbooks === false">
		<h4>No books added yet, find them and add them.</h4>
		<p><button @click="$router.push({ name: 'search' })" class="wauto">Search</button></p>
	</div>
	<div v-else>
		<div id="alert" v-if="alertStore.currentAlert">
			<div>{{ alertStore.currentAlert }}</div>
		</div>
		<p v-if="state.resultsWarning">
			{{ state.resultsWarning }}
		</p>

		<article
			v-for="(book, index) in state.books"
			:key="index"
			class="book-summary"
			:class="book.reading ? 'reading' : ''"
		>
			<header>
				<aside class="cover">
					<img v-if="book.image" :src="book.image" alt="" />
				</aside>
				<div class="in-short">
					<h2>
						{{ book.title_short }}
						<sub
							><span v-for="(author, index2) in book.authors" :key="index2"
								>{{ author }}<br /> </span
						></sub>
					</h2>
					{{ book.date_published }}<br />
					{{ book.pages }} pages
				</div>
			</header>
			<main>
				<div v-if="book.synopsis">
					<h3>Synopsis:</h3>
					{{ book.synopsis.substring(0, 180) }}
					...
				</div>
				<!-- <div class="tropes">
						<h3>Tropes</h3>
						<span v-for="(topic, index) in book.topics" :key="index">
							<button @click="addTopic(topic)" class="badge">{{ topic }}</button>
							<span v-if="index < book.topics.length - 1">, </span>
						</span>
					</div>
					<div v-if="book.uri">
						<a :href="book.uri" target="_blank"><span>Read more on OpenLibrary</span></a>
					</div> -->
			</main>
			<footer>
				<div class="marks">
					<div class="mark">
						<a @click="removeBook(index, book)"
							><span class="icon icon-remove"></span>Remove from my books</a
						>
					</div>
					<div class="mark">
						<a @click="markAsReading(index, book)" v-if="book.reading === false">
							<span class="icon icon-reading"></span>
							Mark as reading
						</a>
						<span v-else class="marked">
							<span class="icon icon-reading"></span>Marked as reading</span
						>
					</div>
					<div class="mark">
						<a
							@click="markAsRead(index, book)"
							v-if="book.reading === true && book.finished === false"
						>
							<span class="icon icon-read"></span>Mark as read
						</a>
						<span v-if="book.finished === true" class="marked"
							><span class="icon icon-read"></span>Marked as read</span
						>
					</div>

					<div class="mark">
						<a
							v-if="!book.onWishlist || book.saved === false"
							@click="addToWishlist(index, book)"
						>
							<span class="icon icon-wishlist"></span>Add to wishlist
						</a>
						<a v-else-if="book.onWishlist" @click="removeFromWishlist(index, book)">
							<span class="icon icon-wishlist"></span>Remove from Wishlist
						</a>
					</div>

					<!-- <div v-if="!favoriteBooks.includes(book.title)"> -->

					<div class="mark">
						<a
							v-if="!book.isFavorite || book.saved === false"
							@click="addToFavorites(index, book)"
						>
							<span class="icon icon-favorites"></span>Add to favorites
						</a>
						<a v-else-if="book.isFavorite" @click="removeFromFavorites(index, book)">
							<span class="icon icon-favorites"></span>Remove from favorites
						</a>
					</div>

					<!-- TODO: hide -->
					<!-- 
						<div class="mark">
							<span class="icon icon-hide"></span> Don't want to see this again
						</div>
-->

					<!--						</div>
						<div v-else>
							<span class="icon-favorites red">♡</span> Added to favorites<br />
							<a class="favorites" @click="removeFavoriteBook(book.title)">
								<span class="icon-favorites">♡</span> Remove from favorites
							</a>
						</div>
						<span class="icon-remove"><img src="/img/remove-icon.svg" alt="" /></span>
						Remove<br /> -->
				</div>

				<!--			<div class="rating">
						<h3>Rating</h3>
						<div class="stars">★★★☆☆</div>
					</div> -->

				<hr />
			</footer>
		</article>
	</div>
</template>
