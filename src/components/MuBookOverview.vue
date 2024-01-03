<script>
import MuBooksOverviewStats from '@/components/MuBooksOverviewStats.vue'
import MuBooksOverviewAddBook from '@/components/MuBooksOverviewAddBook.vue'
import MuBooksOverviewList from './MuBooksOverviewList.vue'

export default {
  name: 'BooksOverview',
  components: { MuBooksOverviewStats, MuBooksOverviewAddBook, MuBooksOverviewList },
  data: () => ({
    showstatsnstuff: true,
    person: {
      name: 'Klaas',
      age: 14
    },
    booklist: [
      {
        id: 0,
        title: 'Dark Roasted Juan',
        pages: 140,
        chapters: 41,
        releaseYear: 1941,
        soldAmount: 13124,
        author_id: 1,
        genres: ['dark romance', 'thriller', 'drama'],
        topics: ['Spain', 'coffee', 'farmers', 'dominant male lead']
      },
      {
        id: 2,
        title: 'Hunka hunka',
        pages: 200,
        chapters: 31,
        releaseYear: 2001,
        soldAmount: 20010001,
        author_id: 0,
        genres: ['no romance', 'wild'],
        topics: ['strippers', 'workout', 'fitness', 'beach', 'party']
      },
      {
        id: 3,
        title: 'Hookah lounge',
        pages: 20,
        chapters: 3,
        releaseYear: 2022,
        soldAmount: 20,
        author_id: 4,
        genres: ['funk', 'adventure'],
        topics: ['strippers', 'puberty', 'adolecense', 'drugs', 'prositution']
      },
      {
        id: 6,
        title: 'Sweet sweet sweat',
        pages: 170,
        chapters: 30,
        releaseYear: 2021,
        soldAmount: 3214124,
        author_id: 1,
        genres: ['romance', 'thriller'],
        topics: ['candy', 'athletes', 'outdoors', 'dominant female lead', 'running']
      },
      {
        id: 8,
        title: 'Roses and Full moons',
        pages: 800,
        chapters: 8,
        releaseYear: 2008,
        soldAmount: 888888,
        author_id: 4,
        genres: ['romance', 'drama', 'werewolves'],
        topics: ['flowers', 'roses', 'werewolves', 'dominant male lead', 'submissive female lead']
      }
    ],

    authors: [
      {
        id: 0,
        name: 'B. Ooba',
        birthdate: '1981-01-30',
        gender: 'F'
      },
      { id: 1, name: 'L.L. Koel Jee', birthdate: '1969-12-15', gender: 'M' },
      { id: 4, name: 'Money Penny', birthdate: '1940-05-05', gender: 'F' }
    ],

    favoriteBooks: [],
    favoriteTopics: [],
    favoriteGenres: []
  }),

  computed: {
    // showRecent() {
    // 	console.log('showing recent')
    // },
    // showSmallBooks() {
    // 	console.log('showing small books')
    // }
    // favoriteBooksArray() {
    // 	return this.favoriteBooks.slice();
    // },
  },

  methods: {
    addbook(name) {
      this.person.name = name
      // this.booklist.push(arr)
      console.log('arr:', this.person.name)
      // console.log(this.booklist)
    },

    changeperson() {
      this.person.name = 'jan'
    },
    addFavoriteBook(bookName) {
      if (!this.favoriteBooks.includes(bookName)) {
        this.favoriteBooks.push(bookName)
      }
      console.log('favoriteBooks: ', this.favoriteBooks)
    },
    removeFavoriteBook(bookName) {
      this.favoriteBooks.splice(this.favoriteBooks.indexOf(bookName), 1)
      console.log('this.favoriteBooks:', this.favoriteBooks)
    },
    showSmallChapters() {
      console.log('show small chapters')
    },
    addTopic(topic) {
      if (!this.favoriteTopics.includes(topic)) {
        this.favoriteTopics.push(topic)
        console.log(topic, 'added!')
      }
    },
    addGenre(genre) {
      if (!this.favoriteGenres.includes(genre)) {
        this.favoriteGenres.push(genre)
        console.log(genre, 'added!')
      }
    },
    percentIncrease(oldN, newN) {
      let smaller = ((newN - oldN) / oldN) * 100
      console.log('percent increase:', smaller)
    },
    addToBooklist(newbook) {
      // TODO:  add id field to object before pushing
      newbook.genres = newbook.genres.split(',')
      newbook.topics = newbook.topics.split(',')
      console.log('genres:', newbook.genres)
      console.log('topics:', newbook.topics)
      this.booklist.push(newbook)
      this.cleanform() // TODO: fix
      console.log('new version of booklist:', this.booklist)
    },
    cleanform() {
      this.abTitle = null
      this.abReleaseYear = null
      this.abPages = null
      this.abChapters = null
      this.abGenres = null
      this.abTopics = null
    }
  }

  // watch: {
  // 	favoriteTopics(val, oldVal) {
  // 		console.log('val', val)
  // 		console.log('oldVal:', oldVal)
  // 	}
  // }
}
</script>

<template>
  <div>
    <h2>Books</h2>
    <ul>
      <MuBooksOverviewList :booklist="booklist" />
      <li v-for="(book, index) in booklist" :key="index">
        <h3>{{ book.title }} ({{ book.releaseYear }})</h3>
        pages: {{ book.pages }}, chapters:
        {{ book.chapters }}
        <button @click="addFavoriteBook(book.title)" :disabled="favoriteBooks.includes(book.title)">
          add book to favorites
        </button>
        <button v-if="favoriteBooks.includes(book.title)" @click="removeFavoriteBook(book.title)">
          remove
        </button>

        <br />Genre:
        <span v-for="(genre, index) in book.genres" :key="index"
          ><button @click="addGenre(genre)">{{ genre }}</button>
          <span v-if="index < book.genres.length - 1">, </span>
        </span>

        <br />
        Topics:
        <span v-for="(topic, index) in book.topics" :key="index">
          <button @click="addTopic(topic)">{{ topic }}</button>
          <span v-if="index < book.topics.length - 1">, </span>
        </span>

        <br />
        <br />
      </li>
    </ul>
    <MuBooksOverviewAddBook @addbooktmp="(name) => addToBooklist(name)"
      ><h4>add book</h4>
    </MuBooksOverviewAddBook>

    <br />
    <button v-if="!showstatsnstuff" @click="showstatsnstuff = !showstatsnstuff">
      Show stats n stuff
    </button>
    <div id="statsnstuff" v-if="showstatsnstuff">
      <button @click="showstatsnstuff = !showstatsnstuff">Hide stats n stuff</button>

      <h3>Favorite books</h3>
      <p v-if="favoriteBooks.length === 0">No books in favoriteBooks yet</p>
      <ul>
        <li v-for="(book, index) in favoriteBooks" :key="index">
          {{ book }} &nbsp;<button @click="removeFavoriteBook(book)">remove</button>
        </li>
      </ul>

      <br />
      <h3>Beloved Genres</h3>
      {{ favoriteGenres }}
      <MuBooksOverviewStats
        :authors="authors"
        :booklist="booklist"
        :favoriteTopics="favoriteTopics"
      />
    </div>
  </div>
</template>

<style scoped></style>
