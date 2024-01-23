<script setup>
import { useMuBooksStore } from '../../stores/MuBooksStore'
import { reactive } from 'vue'
const state = reactive({
	booklist: useMuBooksStore().getWishlist
})
console.log(state.booklist)
</script>
<template>
	<h1>Wishlist</h1>
	<p>My wishy listy aqui tem assim coisas ne?</p>
	<main class="wishlist">
		<article class="book-summary" v-for="(book, index) in state.booklist" :key="index">
			<aside class="cover"><img :src="book.image" /></aside>
			<div class="in-short">
				<h2>
					{{ book.title }}
					<sub
						><span v-for="(author, index2) in book.authors" :key="index2"
							>{{ author }}<br /> </span
					></sub>
				</h2>
			</div>
		</article>
	</main>
</template>
<style scoped>
.book-summary {
	display: flex;
	align-items: center;
}
</style>
