<script setup>
import NavWrapper from './components/NavWrapper.vue'
// import GlobalCounter from './components/GlobalCounter.vue'
</script>

<template>
	<header id="header">
		<NavWrapper />
	</header>
	<main id="main">
		<RouterView />
	</main>
	<footer id="footer">
		<!-- <GlobalCounter /> -->
	</footer>
</template>
