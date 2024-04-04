<template>
	<slot />
	<form @submit.prevent="addToBooklist">
		<label>Title</label>
		<input type="text" v-model="addbooktmp.title" required />
		<label>Year</label>
		<input type="number" v-model="addbooktmp.releaseYear" required />
		<label>Pages</label>
		<input type="number" v-model="addbooktmp.pages" required />
		<label>Chapters</label>
		<input type="number" v-model="addbooktmp.chapters" />
		<label>Genres</label>
		<input type="text" v-model="addbooktmp.genres" />
		<label>Topics</label>
		<input type="text" v-model="addbooktmp.topics" />
		<button>Add book</button>
	</form>
	<!-- <pre> {{ addbooktmp }} </pre> -->
</template>
<script>
export default {
	name: 'MuBooksOverviewAddBook',
	data() {
		return {
			addbooktmp: {
				title: null,
				pages: null,
				chapters: null,
				releaseYear: null,
				soldAmount: null,
				genres: null,
				topics: null
			}
		}
	},
	emits: ['addbooktmp'],
	methods: {
		addToBooklist() {
			this.$emit('addbooktmp', this.addbooktmp)
		}
	}
}
</script>
