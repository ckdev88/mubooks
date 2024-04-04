<script setup>
defineProps({ user: { type: Object, required: true } })
</script>

<template>
	<div>
		{{ user.name }} ({{ user.email }}): {{ user.address.city }}<br />&Tab;website:
		{{ user.website }}
	</div>
	{{ user }}
</template>
