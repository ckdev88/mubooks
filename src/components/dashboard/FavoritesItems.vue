<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMuBooksStore } from '../../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()
const router = useRouter()
let hasbooks = false
let books = []

if (muBooksStore.getFavorites !== false) {
	books = ref(muBooksStore.getFavorites.slice(0, 4))
	if (books.value.length > 0) hasbooks = true
}
function goFavs() {
	console.log('go favs')
	router.push({ name: 'favorites' })
}
</script>

<template>
	<main v-if="hasbooks" class="favorites deck" @click="goFavs()">
		<div class="deck-container">
			<article
				class="book-cover"
				v-for="(book, index) in books"
				:key="index"
				@click="$router.push({ name: 'favorites' })"
				:style="index ? 'z-index:' + (10 - index) : 'z-index:10'"
			>
				<div>
					<img :src="book.image" :alt="book.title" />
				</div>
			</article>
		</div>
	</main>
	<main v-else @click="$router.push({ name: 'savedbooks' })" class="toadd">
		<aside>
			<button><img src="/img/icon-favorites.png" /></button>
		</aside>
		Only the best ones here
	</main>
</template>
