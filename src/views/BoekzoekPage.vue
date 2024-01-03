<script>
export default {
  data() {
    return {
      apidata: [],
      boekzoek: null
    }
  },
  methods: {
    loggie() {
      console.log('asdads')
    },
    boekZoeker() {
      this.boekzoek = boekzoekn
    },
    fetchBook() {
      if (this.boekzoek) {
        console.log(this.boekzoek)
      }

      // // fetch('http://openlibrary.org/api/get?key=/b/OL1001932M')
      fetch('http://openlibrary.org/search.json?q=' + this.boekzoek)
        .then((res) => res.json())
        .then((data) => (this.apidata = data))
        .then((err) => console.log('error', err.message))
    }
  },
  mounted() {
    setTimeout(this.fetchBook, 1000)
  },
  computed: {}
}
</script>

<template>
  books here
  <!-- <button @click="fetchBook">fetch books</button> -->
  <!-- {{apidata}} -->
  <input v-model="boekzoek" @keyup.enter="fetchBook" />

  <p>query: {{ boekzoek }}</p>

  <p>num found: {{ apidata.numFound }}</p>
  <!-- {{apidata}} -->
  <div v-for="(book, index) in apidata.docs" :key="index" class="book-item">
    {{ book.title }} - {{ book.author_name }}({{ book.publish_date }}) #{{ book.isbn }}
  </div>
</template>

<style>
.book-item {
  background: #121212;
  border: 1px dotted #444;
  margin: 1rem;
}
</style>
