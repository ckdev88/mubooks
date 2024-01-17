<script>
import MuBooksOverviewStats from '/src/components/MuBooksOverviewStats.vue'
import MuBooksOverviewAddBook from '/src/components/MuBooksOverviewAddBook.vue'
import MuBooksOverviewList from '/src/components/MuBooksOverviewList.vue'

export default {
	name: 'BooksOverview',
	components: { MuBooksOverviewStats, MuBooksOverviewAddBook, MuBooksOverviewList },
	data: () => ({
		showstatsnstuff: true,
		person: {
			name: 'Klaas',
			age: 14
		},
		booklist: [
			{
				id: 0,
				title: 'The Dare',
				pages: 107,
				releaseYear: 2019,
				soldAmount: 13124,
				author_id: 1,
				author_name: 'Harley Laroux',
				genres: ['dark romance', 'thriller', 'drama'],
				topics: ['Spain', 'coffee', 'farmers', 'dominant male lead'],
				uri: 'https://openlibrary.org/works/OL27679307W/The_Dare?edition=key%3A/books/OL37742902M#details',
				cover: 'https://covers.openlibrary.org/b/id/14567458-M.jpg',
				synopsis:
					"Jessica Martin is not a nice girl. Hot, popular, and a former cheerleader, she looks down her nose at everyone - especially Manson Reed, the \"freak\" she used to bully. When Jessica and Manson end up at the same Halloween party, Manson challenges her to a game of Drink or Dare, and Jessica can't pass up a challenge. As the dares get increasingly sexual and degrading, Jessica is horrified to find herself enjoying Manson's orders a little too much. When cocky Jessica loses the game, she becomes Manson's slave for the night, and what ensues is a dark game of pleasure and pain, intense fetishes, hard punishments, and Jessica's realization that she can't get enough of Manson's dark cruelty. This dark erotic novella is written in First Person POV and is about 30k words in length. "
			},
			{
				id: 2,
				title: 'It ends with us',
				pages: 200,
				releaseYear: 2001,
				soldAmount: 20010001,
				author_id: 2,
				author_name: 'Colleen Hoover',
				genres: ['no romance', 'wild'],
				topics: [
					'Fiction',
					'Romance',
					'Contemporary',
					'Life change events',
					'Triangles (Interpersonal relations)',
					'Man-woman relationships',
					'Neurosurgeons',
					'First loves',
					'Businesswomen',
					'Fiction',
					'Contemporary Women',
					'New York Times bestseller',
					'Fiction',
					'romance',
					'contemporary',
					'Man-woman relationships',
					'fiction',
					'Fiction',
					'women',
					'collectionid:nyt2020s'
				],
				uri: 'https://openlibrary.org/works/OL18020194W/It_Ends_With_Us',
				cover: 'https://ia601908.us.archive.org/BookReader/BookReaderPreview.php?id=itendswithus0000hoov&itemPath=%2F5%2Fitems%2Fitendswithus0000hoov&server=ia601908.us.archive.org&page=cover_w500_h500.jpg',
				synopsis:
					' Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life seems too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan—her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened. With this bold and deeply personal novel, It Ends With Us is a heart-wrenching story and an unforgettable tale of love that comes at the ultimate price. '
			},
			{
				id: 3,
				title: 'Evil Boys',
				author_id: 5,
				author_name: 'Clarissa Wild',
				pages: 546,

				releaseYear: 2023,
				soldAmount: 20,
				author_id: 4,
				genres: ['funk', 'adventure'],
				topics: ['strippers', 'puberty', 'adolecense', 'drugs', 'prositution'],
				cover: 'https://covers.openlibrary.org/b/id/14434374-L.jpg',
				uri: 'https://openlibrary.org/works/OL36775732W/Evil_Boys'
			},
			{
				id: 6,
				title: 'Camp Deviant',
				author_name: 'Kady Ash',
				pages: 242,
				releaseYear: 2023,
				soldAmount: 3214124,
				author_id: 1,
				uri: 'https://openlibrary.org/works/OL37521905W/Camp_Deviant?edition=key%3A/books/OL50546621M',
				cover: 'https://covers.openlibrary.org/b/id/14567614-L.jpg',
				genres: ['romance', 'thriller'],
				topics: ['fiction', 'contemporary', 'erotica', 'adventurous', 'dark', 'emotional'],
				synopsis:
					'If anyone has ever deserved to get raw-dogged by a couple of strangers, it’s me. I’ve had the year from Hell and a break-up that matched that shitty energy, so why not? It’s one full moon weekend with no strings attached and no rubbers — which are my two favorite things to not have — and I get to walk away Monday morning with my head held high and my legs feeling like jelly. A girl’s gotta indulge every once in a while.'
			},
			{
				id: 8,
				title: 'Haunting Adeline',
				pages: 800,

				releaseYear: 2008,
				soldAmount: 888888,
				author_id: 4,
				genres: ['romance', 'drama', 'werewolves'],
				topics: [
					'flowers',
					'roses',
					'werewolves',
					'dominant male lead',
					'submissive female lead'
				],
				uri: 'https://openlibrary.org/works/OL27310398W/Haunting_Adeline?edition=key%3A/books/OL46776502M',
				cover: 'https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_84.zip&file=0013846269-L.jpg',
				synopsis:
					"I can manipulate the emotions of anyone who lets me. I will make you hurt, make you cry, make you laugh and sigh. But my words don't affect him. Especially not when I plead for him to leave. He's always there, watching and waiting. And I can never look away. Not when I want him to come closer. "
			}
		],

		authors: [
			{
				id: 0,
				name: 'B. Ooba',
				birthdate: '1981-01-30',
				gender: 'F'
			},
			{ id: 1, name: 'L.L. Koel Jee', birthdate: '1969-12-15', gender: 'M' },
			{ id: 4, name: 'Money Penny', birthdate: '1940-05-05', gender: 'F' }
		],

		favoriteBooks: [],
		favoriteTopics: [],
		favoriteGenres: []
	}),

	computed: {
		// showRecent() {
		// 	console.log('showing recent')
		// },
		// showSmallBooks() {
		// 	console.log('showing small books')
		// }
		// favoriteBooksArray() {
		// 	return this.favoriteBooks.slice();
		// },
	},

	methods: {
		addbook(name) {
			this.person.name = name
			// this.booklist.push(arr)
			console.log('arr:', this.person.name)
			// console.log(this.booklist)
		},

		changeperson() {
			this.person.name = 'jan'
		},
		addFavoriteBook(bookName) {
			if (!this.favoriteBooks.includes(bookName)) {
				this.favoriteBooks.push(bookName)
			}
			console.log('favoriteBooks: ', this.favoriteBooks)
		},
		removeFavoriteBook(bookName) {
			this.favoriteBooks.splice(this.favoriteBooks.indexOf(bookName), 1)
			console.log('this.favoriteBooks:', this.favoriteBooks)
		},
		addTopic(topic) {
			if (!this.favoriteTopics.includes(topic)) {
				this.favoriteTopics.push(topic)
				console.log(topic, 'added!')
			}
		},
		addGenre(genre) {
			if (!this.favoriteGenres.includes(genre)) {
				this.favoriteGenres.push(genre)
				console.log(genre, 'added!')
			}
		},
		percentIncrease(oldN, newN) {
			let smaller = ((newN - oldN) / oldN) * 100
			console.log('percent increase:', smaller)
		},
		addToBooklist(newbook) {
			// TODO:  add id field to object before pushing
			newbook.genres = newbook.genres.split(',')
			newbook.topics = newbook.topics.split(',')
			console.log('genres:', newbook.genres)
			console.log('topics:', newbook.topics)
			this.booklist.push(newbook)
			this.cleanform() // TODO: fix
			console.log('new version of booklist:', this.booklist)
		},
		cleanform() {
			this.abTitle = null
			this.abReleaseYear = null
			this.abPages = null
			this.abGenres = null
			this.abTopics = null
		}
	}

	// watch: {
	// 	favoriteTopics(val, oldVal) {
	// 		console.log('val', val)
	// 		console.log('oldVal:', oldVal)
	// 	}
	// }
}
</script>

<template>
	<div>
		<h1>MuBOOKS</h1>
		<!-- <MuBooksOverviewList :booklist="booklist" /> -->

		<article v-for="(book, index) in booklist" :key="index" class="book-summary">
			<header>
				<aside class="cover">
					<img v-if="book.cover" :src="book.cover" alt="" />
				</aside>
				<div class="in-short">
					<h2>
						{{ book.title }} ({{ book.releaseYear }})
						<sub>{{ book.author_name }}</sub>
					</h2>
					{{ book.releaseYear }}<br />
					{{ book.pages }} pages
				</div>
			</header>
			<main>
				<div v-if="book.synopsis">
					<h3>Synopsis:</h3>
					{{ book.synopsis.substring(0, 180) }}
					...
				</div>
				<div class="tropes">
					<h3>Tropes</h3>
					<span v-for="(topic, index) in book.topics" :key="index">
						<button @click="addTopic(topic)" class="badge">{{ topic }}</button>
						<span v-if="index < book.topics.length - 1">, </span>
					</span>
				</div>
				<!-- <div v-if="book.uri"> -->
				<!-- 	<a :href="book.uri" target="_blank"><span>Read more on OpenLibrary</span></a> -->
				<!-- </div> -->
			</main>
			<footer>
				<div class="marks">
					<span class="icon-reading">🕮</span> Mark as reading<br />
					<span class="icon-read">🗸</span> Mark as read<br />
					<div v-if="!favoriteBooks.includes(book.title)">
						<a class="favorites" @click="addFavoriteBook(book.title)">
							<span class="icon-favorites">♡</span> Add to favorites
						</a>
					</div>
					<div v-else>
						<span class="icon-favorites red">♡</span> Added to favorites<br />
						<a class="favorites" @click="removeFavoriteBook(book.title)">
							<span class="icon-favorites">♡</span> Remove from favorites
						</a>
					</div>
					<span class="icon-remove"><img src="/img/remove-icon.svg" alt="" /></span>
					Remove<br />
				</div>
				<div class="rating">
					<h3>Rating</h3>
					<div class="stars">★★★☆☆</div>
				</div>
				<hr />
				<!-- Genre kan later weer worden toegevoegd, voor nu even weg 
				<br />Genre:
				<span v-for="(genre, index) in book.genres" :key="index"
					><button @click="addGenre(genre)">{{ genre }}</button>
					<span v-if="index < book.genres.length - 1">, </span>
				</span>
				-->
			</footer>
		</article>
		<MuBooksOverviewAddBook @addbooktmp="(name) => addToBooklist(name)"
			><h2>add book</h2>
		</MuBooksOverviewAddBook>

		<br />
		<button v-if="!showstatsnstuff" @click="showstatsnstuff = !showstatsnstuff">
			Show stats n stuff
		</button>
		<div id="statsnstuff" v-if="showstatsnstuff">
			<button @click="showstatsnstuff = !showstatsnstuff">Hide stats n stuff</button>

			<h3>Favorite books</h3>
			<p v-if="favoriteBooks.length === 0">No books in favoriteBooks yet</p>
			<ul>
				<li v-for="(book, index) in favoriteBooks" :key="index">
					{{ book }} &nbsp;<button @click="removeFavoriteBook(book)">remove</button>
				</li>
			</ul>

			<br />
			<h3>Beloved Genres</h3>
			{{ favoriteGenres }}
			<MuBooksOverviewStats
				:authors="authors"
				:booklist="booklist"
				:favoriteTopics="favoriteTopics"
			/>
		</div>
	</div>
</template>

<style scoped></style>
