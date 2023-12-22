<script setup>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const userStore = useUserStore()

const userslist = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
  res.json()
)
userStore.userList = userslist
</script>

<template>
  <ul v-if="userStore.userList.length > 0">
    <li v-for="user in userStore.userList" :key="user.id">
      <RouterLink :to="`/users/${user.id}`">{{ user.name }} </RouterLink>
    </li>
  </ul>
  <div v-else>No users found</div>
</template>
