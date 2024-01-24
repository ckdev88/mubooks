<script setup></script>

<template>
	<h1>Search</h1>
	<p>
		Find the book you want to add by title. <br />At this moment only books released after 2019
		are available.
	</p>
	<!-- <input type="text" v-model="explore.author" placeholder="Author..." @keyup.enter="fetchBook" /> -->
	<!-- <input type="text" v-model="explore.title" placeholder="Title..." @keyup.enter="fetchBook" /> -->
	<form @submit.prevent="refreshResults(explore.title)">
		<input type="text" v-model="explore.title" />
		<button>Search</button>
	</form>
</template>
