<template>
	<article v-for="(book, index) in booklist" :key="index">
		<header>
			<aside class="cover">
				<img v-if="book.photo" :src="book.photo" alt="" />
			</aside>
			<div class="in-short">
				<h3>{{ book.title }} ({{ book.releaseYear }})</h3>
				{{ book.author_name }}<br />
				{{ book.releaseYear }}<br />
				{{ book.pages }} pages
			</div>
		</header>
		<main>
			<div v-if="book.synopsis">
				<strong>Synopsis:</strong><br />{{ book.synopsis.substring(0, 100) }}
			</div>

			<div>Tropes / tags</div>
			<div v-if="book.uri">
				<a :href="book.uri" target="_blank"><span>Read more on OpenLibrary</span></a>
			</div>
		</main>
		<footer>
			<button @click="book.isFavourited = !book.isFavourited">Favourite toggle</button>
			<div v-if="book.isFavourited"><strong>Favourite!</strong></div>
			Mark as reading<br />
			Mark as read<br />
			Add to favorites<br />
			Remove (+ prompt: are you sure? y/n)<br />
			Rating: max 5 sterren
			<hr />
			<button
				@click="addFavoriteBook(book.title)"
				:disabled="favoriteBooks.includes(book.title)"
			>
				add book to favorites
			</button>
			<button
				v-if="favoriteBooks.includes(book.title)"
				@click="removeFavoriteBook(book.title)"
			>
				remove
			</button>

			<br />Genre:
			<span v-for="(genre, index) in book.genres" :key="index"
				><button @click="addGenre(genre)">{{ genre }}</button>
				<span v-if="index < book.genres.length - 1">, </span>
			</span>

			<br />
			Topics:
			<span v-for="(topic, index) in book.topics" :key="index">
				<button @click="addTopic(topic)">{{ topic }}</button>
				<span v-if="index < book.topics.length - 1">, </span>
			</span>
		</footer>
		<h3>{{ book.title }} ({{ book.releaseYear }})</h3>
		pages: {{ book.pages }}, chapters:
		{{ book.chapters }}
		<!-- <button @click="addFavoriteBook(book.title)" :disabled="favoriteBooks.includes(book.title)"> -->
		<!-- 	add book to favorites -->
		<!-- </button> -->
		<!-- <button v-if="favoriteBooks.includes(book.title)" @click="removeFavoriteBook(book.title)"> -->
		<!-- 	remove -->
		<!-- </button> -->
		<!---->
		<!-- <br />Genre: -->
		<!-- <span v-for="(genre, index) in book.genres" :key="index" -->
		<!-- 	><button @click="addGenre(genre)">{{ genre }}</button> -->
		<!-- 	<span v-if="index < book.genres.length - 1">, </span> -->
		<!-- </span> -->
		<!---->
		<!-- <br /> -->
		<!-- Topics: -->
		<!-- <span v-for="(topic, index) in book.topics" :key="index"> -->
		<!-- 	<button @click="addTopic(topic)">{{ topic }}</button> -->
		<!-- 	<span v-if="index < book.topics.length - 1">, </span> -->
		<!-- </span> -->
	</article>
</template>
<script>
export default {
	name: 'MuBooksOverviewList',
	props: {
		booklist: {
			required: true,
			type: Object
		},
		favoriteBooks: {
			required: true,
			type: Object
		}
	}
}
</script>
