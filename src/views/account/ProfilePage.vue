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

onMounted(() => {
	setDraaideurHeight()
})
</script>
<template>
	<div class="cards-draaideur">
		<div class="axis">
			<MyAccountCard />
			<MyAccountEditCard />
		</div>
	</div>
</template>
