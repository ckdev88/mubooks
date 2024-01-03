<template>Books released this decade: {{ amountRecentBooks }}<br /></template>
<script>
export default {
	name: 'BooksOverviewStatsRecent',
	props: { amountRecentBooks: { required: true } }
}
</script>
