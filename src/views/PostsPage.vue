<script setup>
import PostsList from '/src/components/PostsList.vue'
</script>
<template>
	<h1>Posts ({{ this.$route.name }})</h1>
	<Suspense>
		<PostsList />
		<template #fallback>Loading...</template>
	</Suspense>
</template>
