<script setup>
import BooksList from '../components/BooksList.vue'

import { ref, computed, reactive } from 'vue'
const countryName = ref('Brasil')
const countryNameLower = computed(() => {
  return countryName.value.toLowerCase()
})
const state = reactive({ continent: 'Europe' })
// console.log('countryName:', countryName)
// console.log('countryName:', countryName.value)
// console.log('countryNameLower:', countryNameLower.value)
//
// console.log('state.continent:', state.continent)

defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <h1>Books ({{ this.$route.name }})</h1>
  <Suspense>
    <!-- <BooksList intitle="potter" subject="magic" /> -->
    <BooksList />
    <template #fallback>Loading...</template>
  </Suspense>
</template>
