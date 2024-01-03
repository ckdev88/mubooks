<template>
  <slot />
  <form @submit.prevent="addToBooklist">
    <label>Title</label>
    <input type="text" v-model="addbooktmp.title" required /><br />
    <label>Year</label>
    <input type="number" v-model="addbooktmp.releaseYear" required /><br />
    <label>Pagas</label>
    <input type="number" v-model="addbooktmp.pages" required /><br />
    <label>Chapters</label>
    <input type="number" v-model="addbooktmp.chapters" /><br />
    <label>Genres</label>
    <input type="text" v-model="addbooktmp.genres" /><br />
    <label>Topics</label>
    <input type="text" v-model="addbooktmp.topics" /><br />
    <button>Add book</button>
  </form>
  <!-- <pre> {{ addbooktmp }} </pre> -->
</template>
<script>
export default {
  name: 'MuBooksOverviewAddBook',
  data() {
    return {
      addbooktmp: {
        title: null,
        pages: null,
        chapters: null,
        releaseYear: null,
        soldAmount: null,
        genres: null,
        topics: null
      }
    }
  },
  emits: ['addbooktmp'],
  methods: {
    addToBooklist() {
      console.log('addtobooklist: ', this.addbooktmp)
      this.$emit('addbooktmp', this.addbooktmp)
    }
  }
}
</script>
