<script setup>
const props = defineProps({
	userid: { required: false, type: Number },
	username: { required: false, type: String }
})
</script>
<template>
	<h1>$route {{ username }}</h1>
	<pre>{{ $route }}</pre>
	<h1>$router</h1>
	<pre>{{ $router }}</pre>
</template>
