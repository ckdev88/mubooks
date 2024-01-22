<script setup>
import { reactive, ref } from 'vue'

import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

import { useAlertStore } from '../../stores/AlertStore'
import PostsPage from '../PostsPage.vue'

const alertStore = ref(useAlertStore())

const state = reactive({
	results: muBooksStore.getSavedBooks,
	resultCount: 0,
	isSearched: false,
	resultsWarning: null
})
// console.log(state.results)

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
function markAsReading(index, book) {
	// edit local reactive arr
	if (state.results[index].saved === false) toggleFavBook(index, book)

	// turn on reading
	if (state.results[index].reading === false) {
		for (let i = 0; i < state.results.length; i++) {
			state.results[i].reading = false
		}
		state.results[index].reading = !state.results[index].reading
		if (state.results[index].reading === true) state.results[index].finished = false
	}

	// edit localstorage
	if (state.results[index].reading === true) {
		muBooksStore.addBookReading(index)
	}
	// 	muBooksStore.addBookReading(index)
	// } else {
	// 	console.log('finished true, reading false')
	// 	state.results[index].reading = false
	// 	muBooksStore.endBookReading(index)
	// }

	// // state.results[index].reading = !state.results[index].reading
	// console.log('state.results[index].reading:', state.results[index].reading)
	// state.results[index].finished = !state.results[index].finished
	// console.log('state.results[index].finished:', state.results[index].finished)
}
function markAsRead(index, book) {
	state.results[index].finished = true
	state.results[index].reading = false
	//edit localstorage
}
function removeBook(index) {
	// console.log('remove book from state using index')
	// state.results.splice(index, 1)

	// console.log('remove book from localstorage using book')
	muBooksStore.removeMyBook(index)
	state.results.boeken = muBooksStore.getSavedBooks
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
				<!-- {{ muBooksStore.isReading(index) }} -->
				<!-- {{ index }} -->
				<!-- {{ book }} -->
				<div class="mark">
					<a @click="markAsReading(index, book)" v-if="book.reading === false">
						<span class="icon icon-reading"></span>
						Mark as reading
					</a>
					<span v-else class="marked">
						<span class="icon icon-reading"></span>Marked as reading...</span
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
