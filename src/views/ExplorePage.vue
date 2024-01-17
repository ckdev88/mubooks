<script setup>
import { reactive, ref } from 'vue'
const foundBooks = ref({})
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
const fetchCurl = () => {
	let ret = explore.api
	ret += `?q=${explore.q}`
	if (explore.title !== '') ret += `&title=${explore.title.toLowerCase()}`
	if (explore.author !== '') ret += `&author=${explore.author}`
	if (explore.limit > 0) ret += `&limit=${explore.limit}`
	if (explore.fields !== '') ret += `&fields=${explore.fields}`
	return ret
}
async function fetchBook() {
	return await fetch(fetchCurl())
		.then((res) => res.json())
		.then((data) => (foundBooks.value = data.docs))
}
</script>

<template>
	<h1>Explore</h1>
	<input type="text" v-model="explore.author" placeholder="Author..." @keyup.enter="fetchBook" />
	<input type="text" v-model="explore.title" placeholder="Title..." @keyup.enter="fetchBook" />
	<button @click="fetchBook">Search</button>

	<div v-for="(book, index) in foundBooks" :key="index" class="book-item">
		<pre>{{ book }}</pre>
		<h2>
			{{ book.title }}
			<br /><sub>
				<span v-for="(author, index) in book.author_name" :key="index"
					>{{ author }}<span v-if="book.author_name.length > index + 1">, </span></span
				></sub
			>
		</h2>
	</div>
</template>

<style scoped>
.book-item {
	padding-bottom: 1rem;
	border-bottom: 1px solid hsl(28, 100%, 6%);
}
h2 {
	line-height: 1em;
}
h2 sub {
	font-style: italic;
	font-size: 0.6em;
	font-weight: normal;
	font-family: 'Merriweather', 'serif';
}
</style>

<!---->
<!-- notes: -->
<!---->
<!-- /* -->
<!-- 			notes for searching: -->
<!-- 			- return only the newest version -->
<!-- 			- use only 1 language for now: eng/en, exclude all others -->
<!-- 			- only return if it has a book cover -->
<!-- 			- have an option to only search for ebooks. if exists, have 2 possible responses: ebook -->
<!-- 			  & pshysical book -->
<!-- 			- abilities to search for tropes, genres, triggers, subjects etc -->
<!-- 			- response per book: title, writer, cover, links, synopsys, link to forum or something? -->
<!-- 			- writer should be correct, for detection it might be important to do a seperate search -->
<!-- 			  to link the correct writer to the book (relevance, most editions of the book by writer -->
<!-- 			  X, etc. -->
<!---->
<!-- TODO: my reading journal ideas, per year: -->
<!-- 	TODO: beginning quote, inleiding.. -->
<!-- 	TODO: book of the year (tournament playoff layout, maybe divide in months, so 12 in total) -->
<!-- 	TODO: turven how much books... goals on the side (i.e. 50 books per year) -->
<!-- 	TODO: series tracker -->
<!-- 	TODO: reading formats (meh) -->
<!-- 	TODO: anticipated releases -->
<!---->
<!-- https://www.tiktok.com/@sarahsbookss/video/7318622997210746113 -->
<!---->
<!---->
<!---->
<!--       return this.booklist.filter((book) => book.genres.indexOf('dark romance') > -1) -->
<!---->
<!---->
<!-- 			*/ -->
<!-- // // fetch('http://openlibrary.org/api/get?key=/b/OL1001932M') -->
<!---->

<!-- Key: {{ book.key }} <br /> -->
<!-- Ebook access: {{ book.ebook_access }}<br /> -->
<!-- Languages: -->
<!-- <span v-for="(lang, index) in book.language" :key="index"> -->
<!-- 	{{ lang }}{{ book.language.length - 1 > index ? ', ' : '' }} -->
<!-- </span> -->

<!-- 

test books: 
K. M. Moronova - the fabric of our souls
Penelope Douglas - Credence



-->
