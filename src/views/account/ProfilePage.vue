<script setup>
import { onBeforeMount } from 'vue'
import { supabase } from '../../clients/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuthStore } from '../../stores/AuthStore'
const authStore = useAuthStore()

import MyAccountCard from '../../components/account/MyAccountCard.vue'

console.log('authStore:', authStore)
</script>
<template>
	<MyAccountCard />
	<RouterLink to="logout">Log out</RouterLink>
</template>
