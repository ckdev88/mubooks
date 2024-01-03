<script>
import MuBooksOverviewStatsBestsellers from '@/components/MuBooksOverviewStatsBestsellers.vue'
import MuBooksOverviewStatsRecent from '@/components/MuBooksOverviewStatsRecent.vue'
import MuBooksOverviewStatsSmallChapters from '@/components/MuBooksOverviewStatsSmallChapters.vue'
import MuBooksOverviewStatsBigBooks from '@/components/MuBooksOverviewBigBooks.vue'

export default {
  name: 'MuBooksOverviewStats',
  components: {
    MuBooksOverviewStatsBestsellers,
    MuBooksOverviewStatsRecent,
    MuBooksOverviewStatsSmallChapters,
    MuBooksOverviewStatsBigBooks
  },
  props: {
    authors: { type: Object, required: true },
    booklist: { type: Object, required: true },
    favoriteTopics: { type: Object, required: true }
  },
  computed: {
    amountBigBooks() {
      // console.log('showing big books > 150 pages');
      // console.log('this.booklist:', this.booklist);
      let amountbigbooks = 0
      for (let i = 0; i < this.booklist.length; i++) {
        const element = this.booklist[i]
        if (element.pages > 150) amountbigbooks += 1
      }
      return amountbigbooks
    },

    amountRecentBooks() {
      // console.log('showing recent books, released this decade');
      let amountrecentbooks = 0
      for (let i = 0; i < this.booklist.length; i++) {
        const element = this.booklist[i]
        if (element.releaseYear > 2013) amountrecentbooks += 1
      }
      return amountrecentbooks
    },

    amountBooksSmallChapters() {
      // chapters of <10 pages
      let tmp = 0
      for (let i = 0; i < this.booklist.length; i++) {
        if (this.booklist[i].pages / this.booklist[i].chapters < 10) tmp += 1
      }
      return tmp
    },
    amountBooksBestsellers() {
      let tmp = 0
      for (let i = 0; i < this.booklist.length; i++) {
        if (this.booklist[i].soldAmount > 100000) tmp += 1
      }
      return tmp
    },

    genreRomanceBooks() {
      return this.booklist.filter((book) => book.genres.indexOf('romance') > -1)
    },
    genreDarkRomanceBooks() {
      return this.booklist.filter((book) => book.genres.indexOf('dark romance') > -1)
    }
  }
}
</script>
<template>
  <div>
    <hr />
    <h2>Stats!</h2>
    <h3>Authors</h3>
    <p v-if="authors.length === 0">No writers defined</p>
    <ul>
      <li v-for="(author, index) in authors" :key="index">{{ author.name }}</li>
    </ul>
    <!-- <h3>Filters</h3> -->
    <!-- <p> -->
    <!-- 	<button @click="showRecent">Only show recent (this decade)</button><br /> -->
    <!-- 	<button @click="showSmallBooks">Only show small books (pages &lt; 200)</button><br /> -->
    <!-- 	<button @click="showSmallChapters"> -->
    <!-- 		Only show books with small chapters (&lt; 10 pages per chapter) -->
    <!-- 	</button> -->
    <!-- </p> -->

    <br />
    <h3>Statistics</h3>
    <p>
      <MuBooksOverviewStatsBigBooks :amountBigBooks="amountBigBooks" />
      <MuBooksOverviewStatsRecent :amountRecentBooks="amountRecentBooks" />
      <MuBooksOverviewStatsSmallChapters :amountBooksSmallChapters="amountBooksSmallChapters" />
      <MuBooksOverviewStatsBestsellers :amountBestsellers="amountBooksBestsellers" />

      <!-- genre (romance, fantasy, thriller, dark romance) -->
      <!-- tropes (strong female, dominant male lead, bdsm, maffia, occult, college) -->
      <!-- keywords/trigger -->
      <!-- author -->
      <!-- number of pages -->
      <!-- release 2023-11-13 -->

      <!-- reading in app, where to buy -->
    </p>

    <h3>Beloved Topics</h3>
    <p v-if="favoriteTopics.length === 0">No topics added yet</p>
    <ul>
      <li v-for="(topic, index) in favoriteTopics" :key="index">{{ topic }}</li>
    </ul>

    <h3>Romances</h3>
    <p v-if="genreRomanceBooks.length === 0">No romance books available</p>
    <ul v-else>
      <li v-for="(book, index) in genreRomanceBooks" :key="index">
        {{ book.title }} ({{ book.releaseYear }})
      </li>
    </ul>
    <hr />
    <div v-if="genreDarkRomanceBooks.length > 0">
      <h3>Dark Romances</h3>
      <ul>
        <li v-for="(book, index) in genreDarkRomanceBooks" :key="index">
          {{ book.title }} ({{ book.releaseYear }})
        </li>
      </ul>
    </div>
    <hr />
    <hr />
  </div>
</template>
