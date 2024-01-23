<script>
// idee: hier kunnen series worden opgeslagen, waarbij het primaire doel is om te kijken of dit een
// verfilming van een boek is. Dit wellicht subtiel spreiden in series / movies
export default {
	data: () => ({
		myLists: [],
		greet: 'Aloha',
		title: 'The Gift',
		titleOriginal: 'Atiye',
		basedOnBook: true,
		bookTitle: 'Dünyanin Uyanisi',
		bookAuthor: 'Şengül Boybaş',
		tmpId: null,
		tmpTitle: null,
		tmpUri: null,
		tmpPhoto: null,
		tmpPages: null,
		tmpFavourite: false,
		cast: [
			{
				id: 1,
				name: 'Beren Saat',
				uri: 'https://www.imdb.com/name/nm1754321/',
				photo: 'https://imgs.search.brave.com/5zdAwhRQ_igUZWNM_18F9wUGwpwPkgKle2NDG2tZaf8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjL2M2/L2UyL2RjYzZlMjdm/ZWUzYzE0MWM1MTIy/MWJkNTkyMTJmNWJl/LmpwZw',
				isFavourited: true
			},
			{
				id: 2,
				name: 'Mehmet Günsür',
				uri: 'https://www.imdb.com/name/nm0348347/',
				photo: 'https://imgs.search.brave.com/dxT-mM_Cnxi3Lfqk-1JE66CLfrttu9UMjYNFQAoqMRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFiZXJsZXIuY29t/L2kvMTAvbWVobWV0/LWd1bnN1cl85ODMy/X2IuanBn',
				pages: 'Bowling',
				isFavourited: false
			},
			{
				id: 3,
				name: 'Melisa Şenolsun',
				uri: 'https://www.imdb.com/name/nm7487578/',
				photo: 'https://imgs.search.brave.com/pBybiKY1EX8EbQDqwyHxoqZDJgYgZaSXVXgN9ywElvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubXViaWNkbi5u/ZXQvaW1hZ2VzL2Nh/c3RfbWVtYmVyLzY5/OTg5NS9jYWNoZS02/MTQ3NDgtMTYwNjcx/NTI5MS9pbWFnZS13/ODU2LmpwZz9zaXpl/PTgwMHg',
				pages: 'Drinking',
				isFavourited: false
			},
			{
				id: 4,
				name: 'Older Ladie',
				uri: 'https://www.repubblica.it/serietv/schede/the-gift/4881/',
				photo: 'https://pad.mymovies.it/filmclub/attori/120219.jpg',
				pages: 'Also, drinking',
				isFavourited: true
			}
		]
	}),
	computed: {},
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			this.cast.push({
				id: this.tmpId,
				name: this.tmpTitle,
				uri: this.tmpUri,
				photo: this.tmpPhoto,
				pages: this.tmpPages,
				isFavourited: this.tmpFavourite
			})
		}
	}
}
</script>

<template>
	<h1>
		{{ title }} <span v-if="titleOriginal">(original: {{ titleOriginal }})</span>
	</h1>
	<div v-if="basedOnBook && bookTitle">
		Based on the book {{ bookTitle }}, written by {{ bookAuthor }}.
	</div>

	<h2>Cast:</h2>
	<h3>Favourites</h3>
	<span v-for="(book, index) in cast" :key="index">
		<div v-if="book.isFavourited">{{ book.name }}</div>
	</span>

	<ul>
		<li v-for="(book, index) in cast" :key="index">
			<img v-if="book.photo" :src="book.photo" alt="" />
			<h4>{{ book.name }}</h4>
			<div v-if="book.uri">
				<a :href="book.uri" target="_blank"
					><span>{{ book.uri }}</span></a
				>
			</div>
			<div v-if="book.pages"><strong>Pages:</strong> {{ book.hobbies }}</div>
			<button @click="book.isFavourited = !book.isFavourited">Favourite toggle</button>
			<div v-if="book.isFavourited"><strong>Favourite!</strong></div>
		</li>
	</ul>

	<form @submit.prevent="handleSubmit">
		<h3>Add your own book</h3>
		<label>id</label> <input type="number" required v-model="tmpId" /><br />
		<label>title</label> <input type="text" required v-model="tmpTitle" /><br />
		<label>uri</label> <input type="text" required v-model="tmpUri" /><br />
		<label>photo</label> <input type="text" v-model="tmpPhoto" /><br />
		<label>pages</label> <input type="text" v-model="tmpPages" /><br />
		<label>Favourite</label><input type="checkbox" v-model="tmpFavourite" />
		<input type="submit" value="submit" />
	</form>
</template>
