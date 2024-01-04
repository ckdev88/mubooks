<script>
export default {
	data() {
		return {
			apidata: [],
			boekzoek: {
				api: 'http://openlibrary.org/search.json',
				title: '',
				author: '',
				q: 'language:eng',
				limit: 10,
				fields: '&fields=title,author_name,edition,key,language,ebook_access'
			}
		}
	},
	computed: {
		fetchCurl() {
			let ret = this.boekzoek.api
			ret += `?q=${this.boekzoek.q}`
			if (this.boekzoek.title !== '') ret += `&title=${this.boekzoek.title}`
			if (this.boekzoek.author !== '') ret += `&author=${this.boekzoek.author}`
			if (this.boekzoek.limit > 0) ret += `&limit=${this.boekzoek.limit}`
			if (this.boekzoek.fields !== '') ret += `&fields=${this.boekzoek.fields}`
			console.log('ret:', ret)
			return ret
		}
	},
	methods: {
		loggie() {
			console.log('asdads')
		},
		boekZoeker() {
			this.boekzoek = boekzoekn
		},
		fetchBook() {
			if (this.boekzoek.title) {
				console.log(this.boekzoek)
			}

			/*
			notes for searching:
			- return only the newest version
			- use only 1 language for now: eng/en, exclude all others
			- only return if it has a book cover
			- have an option to only search for ebooks. if exists, have 2 possible responses: ebook
			  & pshysical book
			- abilities to search for tropes, genres, triggers, subjects etc
			- response per book: title, writer, cover, links, synopsys, link to forum or something?
			- writer should be correct, for detection it might be important to do a seperate search
			  to link the correct writer to the book (relevance, most editions of the book by writer
			  X, etc.

TODO: my reading journal ideas, per year:
	TODO: beginning quote, inleiding..
	TODO: book of the year (tournament playoff layout, maybe divide in months, so 12 in total)
	TODO: turven how much books... goals on the side (i.e. 50 books per year)
	TODO: series tracker
	TODO: reading formats (meh)
	TODO: anticipated releases

https://www.tiktok.com/@sarahsbookss/video/7318622997210746113

credence, penelope douglas (niet te vinden op openlibrary.org)

			*/
			// // fetch('http://openlibrary.org/api/get?key=/b/OL1001932M')
			fetch(this.fetchCurl)
				.then((res) => res.json())
				.then((data) => (this.apidata = data))
				.then((err) => console.log('error', err.message))
		}
	}
}
</script>

<template>
	<h1>Zoek boek</h1>
	<input v-model="boekzoek.author" placeholder="Author..." @keyup.enter="fetchBook" />
	{{ boekzoek.author }}<br />
	<input v-model="boekzoek.title" placeholder="Title..." @keyup.enter="fetchBook" />
	<button @click="fetchBook">fetch books</button>

	<p>query: {{ boekzoek }}</p>
	<p>num found: {{ apidata.numFound }}</p>

	<!-- <h2>api data</h2> -->
	<!-- <pre>{{ apidata }}</pre> -->

	<div v-for="(book, index) in apidata.docs" :key="index" class="book-item">
		{{ book.title }} - {{ book.author_name }}({{ book.publish_date }}) #{{ book.isbn }}
		<!-- <pre>{{ book }}</pre> -->
		<h2>
			{{ book.title }} <br /><sub>{{ book.author_name[0] }}</sub>
		</h2>
		Key: {{ book.key }} <br />
		Ebook access: {{ book.ebook_access }}<br />
		Languages:
		<span v-for="(lang, index) in book.language" :key="index">
			{{ lang }}{{ book.language.length - 1 > index ? ', ' : '' }}
		</span>
	</div>
</template>

<style>
.book-item {
	background: #121212;
	border: 1px dotted #444;
	margin: 1rem;
}
</style>
