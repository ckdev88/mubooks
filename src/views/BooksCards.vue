<script>
export default {
	data() {
		return {
			homepage: 'http://localhost:8080',
			showButtons: true,
			showBooks: true,
			imgprefix: 'http://127.0.0.1:8080/img/',
			books: [
				{
					author: 'Jan D. Arte',
					authorAge: 96,
					title: 'Booku',
					year: 1984,
					cover: 'booku.jpg',
					active: false,
					isFav: true
				},
				{
					author: 'Carla C. Conte',
					authorAge: 26,
					title: 'Cooking with the book',
					year: 2000,
					cover: 'cookbook.jpg',
					isFav: true
				},
				{
					author: 'Pete Zekes',
					authorAge: 46,
					title: 'Deke, Creak the Leek in the Beak',
					year: 1922,
					cover: 'creek.jpg',
					isFav: false
				}
			]
		}
	},
	methods: {
		changeTitle(newTitle, book) {
			book.title = newTitle
		},
		toggleShowBooks() {
			this.showBooks = !this.showBooks
		},
		toggleShowButtons() {
			this.showButtons = !this.showButtons
		},
		handleEvent(e, greet) {
			console.log('e:', e)
			console.log('e.type:', e.type)
			if (greet) console.log('greet:', greet)
		},
		handleMousemove(e) {
			this.book.x = e.offsetX
			this.book.y = e.offsetY
			console.log('this.x:', this.book.x)
			console.log('this.y:', this.book.y)
		},
		toggleFavBook(index) {
			this.books[index].isFav = !this.books[index].isFav
		},
		toggleFav(book) {
			book.isFav = !book.isFav
		},
		checkOldies(book) {
			return book.year < 1990
		}
	},
	computed: {
		filteredBooks() {
			// return this.books.filter(b => b.isFav)
			return this.books.filter((book) => book.year < 1990)
		}
	}
}
</script>
<template>
	<!-- {{h1template}} -->
	<a :href="homepage">Home</a><br />
	{{ filteredBooks }}
	<button v-if="showBooks" @click="toggleShowBooks">Hide books</button>
	<button v-else @click="toggleShowBooks">Show books</button>
	<div v-show="showBooks">
		<button @click="toggleShowButtons">
			<span v-if="showButtons">Hide</span>
			<span v-else>Show</span>
			buttons
		</button>
		<ul class="books">
			<li
				v-for="(book, index) in filteredBooks"
				:key="index"
				class="book"
				:class="{ fav: book.isFav }"
			>
				<img :src="imgprefix + book.cover" :alt="book.title" class="bookcover" />
				<h3 class="book-title">{{ book.title }} ({{ book.year }})</h3>
				{{ book.author }}, {{ book.authorAge }}
				<div v-show="showButtons" class="buttons">
					<button @click="toggleFavBook(index)">Fav?</button>
					<button @click="toggleFav(book)">Fav?</button>
					<button
						v-if="book.authorAge < 101"
						:disabled="book.authorAge > 99"
						@click="book.authorAge++"
					>
						+
					</button>
					<button
						v-if="book.authorAge > 0"
						:disabled="book.authorAge < 2"
						@click="book.authorAge--"
					>
						-
					</button>
					<button @click="changeTitle('Cursus Pottenbakken, the sequel', book)">
						Ander?
					</button>
				</div>
			</li>
		</ul>
	</div>
	<!-- mouse events -->
	<!-- <div class="box" @mouseover=handleEvent($event,'jooooooo')>mouseover</div> -->
	<!-- <div class="box" @mouseleave=handleEvent>mouseleave</div> -->
	<!-- <div class="box" @dblclick=handleEvent>double click</div> -->
</template>

<style>
body {
	background: black;
	color: white;
}
a {
	text-decoration: underline;
}
button {
	cursor: pointer;
}
.box {
	display: inline-block;
	padding: 0.2rem;
	margin: 1rem;
	border-radius: 0.4rem;
	font-weight: bold;
	border: 1px solid hotpink;
}
.buttons {
	display: inline-block;
	margin-top: 1rem;
}

.books {
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	counter-reset: books-counter;
}
.book {
	width: 10rem;
	padding: 1rem;
	border: 1px solid #333;
	margin: 1rem;
	counter-increment: books-counter;
	border-radius: 0.3rem;
	transition: background-color ease-in-out 0.12s;
}
.book h3:before {
	content: '' counter(books-counter) ': ';
}
.book.fav {
	background-color: purple;
}
.bookcover {
	width: 5rem;
	height: 7rem;
	object-fit: cover;
	display: block;
	margin: 0 auto;
	border-radius: 0.3rem;
}
</style>
