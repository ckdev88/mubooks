<script setup>
import SavedItems from './SavedItems.vue'
</script>
<template>
	<article class="adder" @click="$router.push({ name: 'savedbooks' })">
		<header>Mu Books<span>›</span></header>
		<SavedItems />
	</article>
</template>
