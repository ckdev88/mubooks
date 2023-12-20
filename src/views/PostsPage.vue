<script setup>
import PostsList from '@/components/PostsList.vue'
</script>
<template>
	<h1>Posts ({{ this.$route.name }})</h1>
	<slot subtitel />
	<Suspense>
		<PostsList />
		<template #fallback>Loading...</template>
	</Suspense>
</template>
