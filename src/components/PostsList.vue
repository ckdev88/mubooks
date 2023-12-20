<script setup>
const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
</script>

<template>
	<h3>Posts list</h3>
	<ul style="margin-left: 0; padding-left: 1.2rem">
		<li v-for="(post, index) in posts" :key="index">
			{{ post.title }} ({{ index }}: {{ post.userId }}: {{ post.id }})
		</li>
	</ul>
</template>
