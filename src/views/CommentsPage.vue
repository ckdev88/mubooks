<script setup>
import CommentsList from '@/components/CommentsList.vue'

const props = defineProps({
	title: { type: String, required: false }
})
</script>
<template>
	<h1>Comments ({{ this.$route.name }})</h1>
	Comments hier<br />
	<Suspense>
		<CommentsList />
		<template #fallback>Loading...</template>
	</Suspense>
	<!-- <pre>{{ getTvDomains }}</pre> -->
	<!-- <pre>{{ comments }}</pre> -->
</template>
