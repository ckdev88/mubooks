<script setup>
import WishlistItems from '../WishlistItems.vue'
</script>
<template>
	<article class="adder">
		<header @click="$router.push({ name: 'wishlist' })">Mu Wishlist<span>›</span></header>
		<WishlistItems />
	</article>
</template>
