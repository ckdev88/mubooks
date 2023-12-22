<script setup>
import { useTypeStore } from '../stores/itemTypeStore'
const TypeStore = useTypeStore()
</script>
<template>
  <h1>Statiegeld bier</h1>
  <form @submit.prevent="TypeStore.statiegeldBonKratjes(TypeStore.aantalKratjes)">
    <label>Aantal kratjes <input type="number" v-model="TypeStore.aantalKratjes" /></label>
    <div>Prijs per krat: {{ TypeStore.statiegeldKrat }}</div>
    <input type="submit" />
  </form>
  <h3>Statiegeld: {{ TypeStore.statiegeldBon }}</h3>
</template>
