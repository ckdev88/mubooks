<script setup>
// import UserDetailCard from '../components/UserDetailCard.vue'
console.log('----')
// import { useRoute, useRouter } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()
console.log('router:', router)

// const route = useRoute()
// console.log('route:', route)

const props = defineProps({
  userid: { required: false, type: Number },
  username: { required: true, type: String }
})
// console.log(route)
// console.log('props', props)

// console.log($route.params)
console.log('====')
</script>
<template>
  <h1>this.$route</h1>
  <pre>{{ this.$route }}</pre>
  <h1>this.$router</h1>
  <pre>{{ this.$router }}</pre>

  <!-- <Suspense> -->
  <!-- 	<UserDetailCard :userArr="state.user" /> -->
  <!-- 	<template #fallback>Loading...</template> -->
  <!-- </Suspense> -->
</template>

<style lang="scss" scoped></style>

<!-- { "path": "/routeinfo", "name": "routeinfo", "params": {}, "query": {}, "hash": "", "fullPath": -->
<!-- "/routeinfo", "matched": [ { "path": "/routeinfo", "name": "routeinfo", "meta": {}, "props": { -->
<!-- "default": false }, "children": [], "instances": { "default": {} }, "leaveGuards": {}, -->
<!-- "updateGuards": {}, "enterCallbacks": {}, "components": { "default": { "__name": "RouteinfoPage", -->
<!-- "props": { "params": { "required": true }, "userid": { "required": false } }, "__hmrId": "a41dce3c", -->
<!-- "__file": "/home/fernando/Documents/Coding/ckdev88/cest-la-vue/src/views/RouteinfoPage.vue" } } } ], -->
<!-- "meta": {} } -->
