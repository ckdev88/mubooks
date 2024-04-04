<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import UserDetailCard from '../components/UserDetailCard.vue'
const route = useRoute()
const state = reactive({
	userArr: fetch('https://jsonplaceholder.typicode.com/users/' + route.params.id)
		.then((res) => res.json())
		.then((res) => (state.userArr = res))
})
</script>

<template>
	<Suspense>
		<div v-if="state.userArr.name">
			<UserDetailCard :userArr="state.userArr" />
		</div>
		<template #fallback>Loading..</template>
	</Suspense>
</template>
