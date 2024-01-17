<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '../../stores/AuthStore'
import useCardRotate from '../../composables/useCardRotate'
const authStore = useAuthStore()
import { supabase } from '../../clients/supabase'



async function loadCurrentUser() {

	const { data, error } = await supabase.auth.getUser()
	console.log('---------data:', data)
	// TODO: needs proper fix, not dirty like this...  pinia, store, login
	if (authStore.status !== true) {
		const { data, error } = await supabase.auth.getUser()
		console.log('---------data:', data)
		if (error) {
			router.push({ name: 'login' })
			console.log('error:', error)
		} else {
			authStore.email = data.user.email
			authStore.screenname = data.user.user_metadata.screenname
			authStore.username = data.user.email
			authStore.status = true
			authStore.uid = data.user.id
		}
	}
	console.log('data.user.id:', data.user.id)
	
	// TODO: add screen name
	// TODO: add possibilities to modify data

}

// "i.likeespressoalot@gmail.com" - id: "6fc479f0-751e-41f1-87f2-8803c38510ba"
async function handleSubmit(e) {
	const newscreenname = authStore.screenname
	const { data, error } = await supabase.auth.updateUser({
		data:{screenname:newscreenname}})

	if(error)console.log(error)
	else console.log('data:', data)
	loadCurrentUser()
	useCardRotate()
}

async function rotateWithoutSaving(){
	// TODO: this is a bit hacky, ideal would be to simply not push to authStore when a value
	// (v-model) is changed
	const { data} = await supabase.auth.getUser()

	authStore.email = data.user.email
	authStore.screenname = data.user.user_metadata.screenname
	useCardRotate()
}

onBeforeMount(() => {
	loadCurrentUser()
})
onMounted(() => {
	console.log(authStore.username)

})
</script>
<template>
	<div class="card">
		<header>My account</header>
		<main>
			<form @submit.prevent="handleSubmit">
				<label>Screen name</label>
				<input type="text" id="account-screenname" v-model="authStore.screenname" />
				<label for="account-email">Email address</label>
				<input type="email" :value="authStore.email" id="account-email" />
				<label for="account-password">Password (leave empty to keep current)</label>
				<input type="password" value="" id="account-password" />
				<button>Save and return</button>
			</form>
		</main>
		<footer>
			<a @click="rotateWithoutSaving">Return without saving</a>
		</footer>
	</div>
</template
