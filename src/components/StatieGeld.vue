<script setup>
import { useStatiegeldStore } from '../stores/StatiegeldStore'
const StatiegeldStore = useStatiegeldStore()
</script>
<template>
  <h1>Statiegeld bier</h1>
  <form @submit.prevent="StatiegeldStore.statiegeldBonKratjes(StatiegeldStore.aantalKratjes)">
    <label>Aantal kratjes <input type="number" v-model="StatiegeldStore.aantalKratjes" /></label>
    <div>Prijs per krat: {{ StatiegeldStore.statiegeldKrat }}</div>
    <input type="submit" />
  </form>
  <h3>Statiegeld: {{ StatiegeldStore.statiegeldBon }}</h3>
</template>
