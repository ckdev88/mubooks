<template>
	<div>Books with small chapters: {{ amountBooksSmallChapters }}<br /></div>
</template>

<script>
export default {
	name: 'BooksOverviewStatsSmallChapters',
	props: {
		amountBooksSmallChapters: {
			type: Number,
			required: true
		}
	}
}
</script>
