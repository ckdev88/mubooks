<script>
import { computed, reactive } from 'vue'
export default {
	async setup() {
		const q = reactive({
			intitle: '',
			inauthor: '',
			inpublisher: '',
			subject: '',
			isbn: ''
		})
		// lou carrigan - douglas - rowling - dom casmurro machado de assis
		// https://editoraarqueiro.com.br/

		const state = reactive({
			booklist: [],
			favoriteGenre: 'Drama'
		})

		const favGenreCaps = computed(() => {
			return state.favoriteGenre.toUpperCase()
		})

		const constructQuery = () => {
			let ret = ''
			if (q.intitle !== '') ret += 'intitle:' + q.intitle + '+'
			if (q.inauthor !== '') ret += 'inauthor:' + q.inauthor + '+'
			if (q.inpublisher !== '') ret += 'inpublisher:' + q.inpublisher + '+'
			if (q.subject !== '') ret += 'subject:' + q.subject + '+'
			return ret
		}
		const computedBooks = state.booklist.items
		return { state, q, computedBooks, favGenreCaps, constructQuery }
	},
	methods: {
		async fetchBooks2() {
			const q = this.constructQuery()
			if (q !== '') {
				this.state.booklist = await fetch(
					'https://www.googleapis.com/books/v1/volumes?q=' + q
				).then((res) => res.json())
			}
		}
	},
	created() {
		this.fetchBooks2()
	}
}
</script>
<template>
	<div>Favorite genre: {{ state.favoriteGenre }} - {{ favGenreCaps }}</div>
	<form @submit.prevent="fetchBooks2">
		<div>
			<input placeholder="author..." type="text" v-model="q.inauthor" /> {{ q.inauthor }}
		</div>
		<div><input placeholder="title..." type="text" v-model="q.intitle" /> {{ q.intitle }}</div>
		<div>
			<input placeholder="publisher..." type="text" v-model="q.inpublisher" />
			{{ q.inpublisher }}
		</div>
		<div>
			<input placeholder="subject..." type="text" v-model="q.subject" /> {{ q.subject }}
		</div>
		<input type="submit" />
		<!-- query: {{ constructQuery() }} -->
	</form>
	<div>
		<ul v-if="state.booklist.length > 0 || state.booklist.totalItems > 0">
			<li v-for="(book, index) in state.booklist.items" :key="index">
				<div>
					{{ book.volumeInfo.title }}, by {{ book.volumeInfo.authors[0] }}&nbsp;({{
						book.volumeInfo.publishedDate
					}})
					<a
						v-if="book.volumeInfo.infoLink"
						:href="book.volumeInfo.infoLink"
						target="_blank"
						>&gt;</a
					>
				</div>
			</li>
		</ul>
		<div v-else><br /><br />No books found</div>
	</div>
</template>
