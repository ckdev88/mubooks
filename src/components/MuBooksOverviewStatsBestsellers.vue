<template>Books sold over 100000: {{ amountBestsellers }}</template>
<script>
export default {
	name: 'BooksOverviewStatsBestsellers',
	props: {
		amountBestsellers: {
			required: true
		}
	}
}
</script>
