<script setup>
const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then((res) =>
	res.json()
)
const filteredComments = comments.filter((res) => res.email.includes('.tv'))
</script>
<template>
	<li v-for="(comment, index) in filteredComments" :key="index">
		{{ comment.name }} ({{ comment.postId }}, {{ comment.id }})
	</li>
</template>
