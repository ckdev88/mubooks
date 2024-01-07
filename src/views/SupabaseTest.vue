<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../clients/supabase'

const countries = ref([])

async function getCountries() {
	const { data } = await supabase.from('countries').select()
	countries.value = data
}

onMounted(() => {
	getCountries()
	// supabase.auth.getSession().then(({ data }) => {
	// 	session.value = data.session
	// })
	// supabase.auth.onAuthStateChange((_, _session) => {
	// 	session.value = _session
	// })
})
</script>
<template>
	<ul>
		<li v-for="country in countries" :key="country.id">{{ country.name }}</li>
	</ul>
</template>
