<script setup>
import { reactive, ref, onUpdated, watch, onBeforeMount } from 'vue'

import bookData from '/data/books.json'

import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

import { useAlertStore } from '../../stores/AlertStore'

const alertStore = ref(useAlertStore())

const booklist = ref(muBooksStore.bookList)
const boeken = bookData

const state = reactive({
	results: ref(booklist),
	resultCount: 0,
	isSearched: false,
	resultsWarning: null
})

const explore = reactive({
	api: 'http://openlibrary.org/search.json',
	title: '',
	author: '',
	q: 'language:eng',
	limit: 20,
	// fields: '&fields=title,author_name,edition,key,language,ebook_access,thumbnail'
	// fields: '&fields=title,author_name,edition,thumbnail'
	fields: '&fields=*'
})

let searchTermToShow = ref('')
function refreshResults(s = explore.title) {
	searchTermToShow = s
	if (s.length < 3) {
		state.resultsWarning = 'keep typing...'
		state.isSearched = true
		return
	}

	let count = 0
	s = s.toLowerCase()
	state.results = []
	state.resultsWarning = null
	// search loop exact match
	for (let i = 0; i < boeken.length; i++) {
		if (s === boeken[i].title.toLowerCase()) {
			// this part helps with reactivity
			boeken[i].saved = muBooksStore.isSaved(boeken[i])

			state.results[count] = boeken[i]

			if (boeken[i].title.length > 35) {
				state.results[count].title_short = boeken[i].title.slice(0, 35)
				state.results[count].title_short += '...'
			} else state.results[count].title_short = boeken[i].title
			if (boeken[i].image !== null)
				state.results[count].cover = 'https://images.isbndb.com/covers' + boeken[i].image
			count++
		}
	}
	// search loop less exact match
	for (let i = 0; i < boeken.length; i++) {
		if (count > 30) {
			state.resultsWarning = 'too many results'
			break
		}
		if (boeken[i].title.toLowerCase().includes(s) && boeken[i].title.toLowerCase() !== s) {
			boeken[i].saved = muBooksStore.isSaved(boeken[i])

			state.results[count] = boeken[i]

			if (boeken[i].title.length > 35) {
				state.results[count].title_short = boeken[i].title.slice(0, 35)
				state.results[count].title_short += '...'
			} else state.results[count].title_short = boeken[i].title
			if (boeken[i].image !== null)
				state.results[count].cover = 'https://images.isbndb.com/covers' + boeken[i].image
			count++
		}
	}
	state.isSearched = true
	state.resultCount = count
}
// const fetchCurl = () => {
// 	let ret = explore.api
// 	ret += `?q=${explore.q}`
// 	if (explore.title !== '') ret += `&title=${explore.title.toLowerCase()}`
// 	if (explore.author !== '') ret += `&author=${explore.author}`
// 	if (explore.limit > 0) ret += `&limit=${explore.limit}`
// 	if (explore.fields !== '') ret += `&fields=${explore.fields}`
// 	return ret
// }
// async function fetchBook() {
// 	return await fetch(fetchCurl())
// 		.then((res) => res.json())
// 		.then((data) => (foundBooks.value = data.docs))
// }

function toggleFavBook(index, book, wishlist = false) {
	// TODO: dit hoort in de store MuBooksStore, als action & getter, reactivity is een issue
	let wishlistVal = wishlist
	if (state.results[index].saved === true) {
		muBooksStore.removeMyBook(book)
	} else {
		muBooksStore.addMyBook(book, false, wishlistVal)
	}
	state.results[index].saved = !state.results[index].saved
}

function toggleReadingBook(index, book) {
	if (state.results[index].saved === false) toggleFavBook(index, book)

	if (state.results[index].reading === false) {
		console.log('reading true, finished false')
		muBooksStore.addBookReading(book)
	} else {
		console.log('finished true, reading false')
		muBooksStore.endBookReading(book)
	}
	state.results[index].reading = !state.results[index].reading
	state.results[index].finished = !state.results[index].finished
}

function addToWishlist(index, book) {
	// save book first
	if (state.results[index].saved === false) toggleFavBook(index, book, true)

	// modify state.results: saved: true
	state.results[index].onWishlist = true
	// modify pinia store & localstorage: [i].onWishlist=true
	muBooksStore.addBookWishlist(book)
}

function removeFromWishlist(index, book) {
	state.results[index].onWishlist = false

	// modify pinia store & localstorage: [i].onWishlist=false
	muBooksStore.removeBookWishlist(book)

	// let myBooks = JSON.parse(localStorage.getItem('MyBooks')
}
</script>

<template>
	<h1>Search</h1>
	<p>
		Find the book you want to add by title. <br />At this moment only books released after 2019
		are available.
	</p>
	<!-- <input type="text" v-model="explore.author" placeholder="Author..." @keyup.enter="fetchBook" /> -->
	<!-- <input type="text" v-model="explore.title" placeholder="Title..." @keyup.enter="fetchBook" /> -->
	<form @submit.prevent="refreshResults(explore.title)">
		<input type="text" v-model="explore.title" />
		<button>Search</button>
	</form>

	<div id="alert" v-if="alertStore.currentAlert">
		<div>{{ alertStore.currentAlert }}</div>
	</div>
	<div v-if="state.isSearched">
		<p v-if="state.resultsWarning">
			{{ state.resultsWarning }}
		</p>
		<div v-else>
			<h2 class="resultsfound">
				{{ state.resultCount }} books found for <i>"{{ searchTermToShow }}"</i>
			</h2>

			<article
				v-for="(book, index) in state.results"
				:key="index"
				class="book-summary"
				:class="book.saved ? 'saved' : ''"
			>
				<header>
					<aside class="cover">
						<img v-if="book.cover" :src="book.cover" alt="" />
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
							<a v-if="book.saved === false" @click="toggleFavBook(index, book)"
								><span class="icon icon-add"></span>Save in my books
							</a>
							<a v-else @click="toggleFavBook(index, book)"
								><span class="icon icon-remove"></span>Remove from my books</a
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
		</div>
	</div>
</template>

<style scoped>
h2.resultsfound {
	font-weight: normal;
	font-family: 'merriweather', 'serif';
	font-size: 1.3rem;
	margin: 1.5em 0;
}
</style>
