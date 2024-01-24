<script setup>
import FavoritesItems from '../FavoritesItems.vue'
</script>
<template>
	<article class="adder">
		<header @click="$router.push({ name: 'favorites' })">Mu Favs<span>›</span></header>
		<FavoritesItems />
	</article>
</template>
