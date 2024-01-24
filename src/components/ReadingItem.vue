<script setup>
import { ref } from 'vue'
const readingAny = ref(false)
let readingNow = ref(null)

if (localStorage.getItem('MyBooks') !== null) {
	const boeken = JSON.parse(localStorage.getItem('MyBooks'))
	console.log('boeken', boeken)
	for (let i = 0; i < boeken.length; i++) {
		if (boeken[i].reading === true) {
			if (boeken[i].title.length > 45) {
				boeken[i].title = boeken[i].title.slice(0, 45)
				boeken[i].title += '...'
			}
			readingNow = boeken[i]
			readingAny.value = true
			break
		}
	}
}
</script>
<template>
	<main v-if="readingAny" class="readingnow">
		<article class="book-summary">
			<aside class="cover"><img :src="readingNow.image" /></aside>
			<div class="in-short">
				<h2>{{ readingNow.title }}</h2>
			</div>
		</article>
	</main>
	<main v-else @click="$router.push({ name: 'search' })">
		<aside>
			<button><img src="/img/plus-icon.svg" /></button>
		</aside>
		If you're already reading a book, let's add it here.
	</main>
</template>
