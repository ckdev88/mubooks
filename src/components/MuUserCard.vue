<template>
	<!-- TODO: later opruimen
  <div>
    <div>Olha {{ user.firstname }}, {{ user.age }}!</div>
    <button @click="$emit('change-name')">Eu sou {{ tmpname }}</button>
  </div>
	-->
</template>
<script>
export default {
	name: 'MuBooksUserCard',
	data() {
		return {
			tmpname: 'Sjoerd'
		}
	},
	props: {
		// props zijn voor data halen/downloaden
		user: {
			type: Object,
			required: true
		}
	},
	emits: ['change-name']
}
</script>
