<!-- TODO: BooksOverview moet het gaan worden, later verwerken -->
<!-- <script setup>
import BooksOverview from '../../components/MuBooksOverview.vue'
</script>
<template>
	<h1>My Saved Books</h1>
	<BooksOverview />

</template>

-->

<script setup>
// TODO: hier meot echt heel hard opgeruimd gaan worden
import { reactive, ref } from 'vue'

import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

import { useAlertStore } from '../../stores/AlertStore'

const alertStore = ref(useAlertStore())

const boeken = ref(JSON.parse(localStorage.getItem('MyBooks')))

const state = reactive({
	results: ref(boeken),
	resultCount: 0,
	isSearched: false,
	resultsWarning: null
})
console.log('---==----')
console.log(state.results)
console.log('****')

let count = 0
state.resultsWarning = null
/*
state.results = []
// search loop exact match
for (let i = 0; i < boeken.length; i++) {
	// this part helps with reactivity
	boeken[i].saved = muBooksStore.isSaved(boeken[i])
	boeken[i].reading = muBooksStore.isReading(boeken[i])
	boeken[i].finished = muBooksStore.isFinished(boeken[i])

	state.results[count] = boeken[i]

	if (boeken[i].title.length > 45) {
		state.results[count].titleshort = boeken[i].title.slice(0, 45)
		state.results[count].titleshort += '...'
	} else state.results[count].titleshort = boeken[i].title
	if (boeken[i].image !== null)
		state.results[count].cover = 'https://images.isbndb.com/covers' + boeken[i].image
	count++
}
// search loop less exact match
for (let i = 0; i < boeken.length; i++) {
	boeken[i].saved = muBooksStore.isSaved(boeken[i])
	boeken[i].reading = muBooksStore.isReading(boeken[i])
	boeken[i].finished = muBooksStore.isFinished(boeken[i])

	state.results[count] = boeken[i]

	if (boeken[i].title.length > 45) {
		state.results[count].titleshort = boeken[i].title.slice(0, 45)
		state.results[count].titleshort += '...'
	} else state.results[count].titleshort = boeken[i].title
	if (boeken[i].image !== null)
		state.results[count].cover = 'https://images.isbndb.com/covers' + boeken[i].image
	count++
}
*/
function toggleFavBook(index, book) {
	// TODO: dit hoort in de store MuBooksStore, als action & getter, reactivity is een issue
	// if (state.results[index].saved === true) {
	muBooksStore.removeMyBook(book)
	// console.log('removing book')
	state.results[index].saved = !state.results[index].saved
}
function toggleReadingBook(index, book) {
	if (state.results[index].saved === false) toggleFavBook(index, book)

	if (state.results[index].reading === false) {
		// console.log('reading true, finished false')
		muBooksStore.addBookReading(book)
	} else {
		// console.log('finished true, reading false')
		muBooksStore.endBookReading(book)
	}
	state.results[index].reading = !state.results[index].reading
	state.results[index].finished = !state.results[index].finished
}
function removeBook(index, book) {
	// console.log('remove book from state using index')
	state.results.splice(index, 1)
	// console.log('remove book from localstorage using book')
	muBooksStore.removeMyBook(book)
}
</script>

<template>
	<h1>My Books</h1>
	<p>
		An overview of my saved books, this includes books that are favorited, read and finished,
		the wishlist and the book currently reading.
	</p>

	<div id="alert" v-if="alertStore.currentAlert">
		<div>{{ alertStore.currentAlert }}</div>
	</div>
	<p v-if="state.resultsWarning">
		{{ state.resultsWarning }}
	</p>

	<article
		v-for="(book, index) in state.results"
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
					{{ book.title }}
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
					<a @click="toggleReadingBook(index, book)" v-if="book.reading === false">
						<span class="icon icon-reading"></span>
						I am reading this book
					</a>
					<a @click="toggleReadingBook(index, book)" v-else>
						<span class="icon icon-read"></span>I am finished reading this book
					</a>
				</div>
				<!-- TODO: wishlist -->
				<!-- 
						<div class="mark">
							<span class="icon icon-wishlist"></span>Add to wishlist
						</div>
-->
				<!-- <div v-if="!favoriteBooks.includes(book.title)"> -->

				<!-- TODO: favorites -->
				<!-- 
					<div class="mark">
<a class="favorites" @click="addFavoriteBook(book.title)">
								<span class="icon icon-favorites"></span>Add to favorites
							</a>
							</div>
-->
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
</template>
