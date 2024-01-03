<template>
  <li v-for="(book, index) in booklist" :key="index">
    <h3>{{ book.title }} ({{ book.releaseYear }})</h3>
    pages: {{ book.pages }}, chapters:
    {{ book.chapters }}
    <!-- <button @click="addFavoriteBook(book.title)" :disabled="favoriteBooks.includes(book.title)"> -->
    <!-- 	add book to favorites -->
    <!-- </button> -->
    <!-- <button v-if="favoriteBooks.includes(book.title)" @click="removeFavoriteBook(book.title)"> -->
    <!-- 	remove -->
    <!-- </button> -->
    <!---->
    <!-- <br />Genre: -->
    <!-- <span v-for="(genre, index) in book.genres" :key="index" -->
    <!-- 	><button @click="addGenre(genre)">{{ genre }}</button> -->
    <!-- 	<span v-if="index < book.genres.length - 1">, </span> -->
    <!-- </span> -->
    <!---->
    <!-- <br /> -->
    <!-- Topics: -->
    <!-- <span v-for="(topic, index) in book.topics" :key="index"> -->
    <!-- 	<button @click="addTopic(topic)">{{ topic }}</button> -->
    <!-- 	<span v-if="index < book.topics.length - 1">, </span> -->
    <!-- </span> -->

    <br />
    <br />
  </li>
</template>
<script>
export default {
  name: 'MuBooksOverviewList',
  props: {
    booklist: {
      required: true,
      type: Object
    },
    favoriteBooks: {
      required: true,
      type: Object
    }
  }
}
</script>
