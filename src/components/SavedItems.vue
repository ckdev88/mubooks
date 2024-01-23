<script setup>
import { defineStore } from 'pinia'
import { useMuBooksStore } from '../stores/MuBooksStore'
let hasSaved = false
const muBooksStore = useMuBooksStore()
if (muBooksStore.getSavedBooks !== null) hasSaved = true
</script>

<template>
	<main v-if="hasSaved" class="savedbooks">
		<article
			class="book-cover"
			v-for="(boek, index) in muBooksStore.getSavedBooks"
			:key="index"
			@click="$router.push({ name: 'savedbooks' })"
			:style="index ? 'z-index:' + (10 - index) : 'z-index:10'"
		>
			<div>
				<img :src="boek.image" :alt="boek.title" />
			</div>
		</article>
	</main>

	<main v-else>
		<aside>
			<button><img src="/img/save-books-icon.png" /></button>
		</aside>
		Let's start saving books.
	</main>
</template>
