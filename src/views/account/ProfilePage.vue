<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()
import MyAccountCard from '../../components/account/MyAccountCard.vue'
import setDraaideurHeight from '../../composables/setDraaideurHeight'
import MyAccountEditCard from '../../components/account/MyAccountEditCard.vue'

console.log('authStore:', authStore)

onMounted(() => {
	setDraaideurHeight()
	// const axis = document.getElementsByClassName('axis')[0]
	// const draaideur = document.getElementsByClassName('axis')[0].parentNode
	// const cards = axis.getElementsByClassName('card')
	// let max = cards[0].offsetHeight
	// for (let i = 0; i < cards.length; i++) {
	// 	// get max height
	// 	if (cards[i].offsetHeight > max) max = cards[i].offsetHeight
	// }
	// for (let i = 0; i < cards.length; i++) {
	// 	//	apply max height to all inner draaideur-cards
	// 	cards[i].style.height = max + 'px'
	// }
	//
	// draaideur.style.height = max + 'px'
	// axis.style.height = max + 'px'
})
</script>
<template>
	<div class="cards-draaideur">
		<div class="axis">
			<MyAccountCard />
			<MyAccountEditCard />
		</div>
	</div>
	<RouterLink to="logout">Log out</RouterLink>
</template>
