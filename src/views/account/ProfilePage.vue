<script setup>
import { onBeforeMount } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()

import MyAccountCard from '../../components/account/MyAccountCard.vue'
import MyAccountEditCard from '../../components/account/MyAccountEditCard.vue'

console.log('authStore:', authStore)
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
