<template>Books with more than 150 pages: {{ amountBigBooks }}<br /></template>
<script>
export default {
	name: 'BooksOverviewBigBooks',
	props: {
		amountBigBooks: {
			required: true
		}
	},
	data: () => ({})
}
</script>
