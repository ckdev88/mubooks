<script setup>
import { useCountStore } from './../stores/CountStore'
const count = useCountStore()
console.log('count:', count)
</script>
<template>
  <h1>global pinia states / store: useCountStore</h1>
  {{ count.count }}
  <button @click="count.increment">increment</button>
</template>
