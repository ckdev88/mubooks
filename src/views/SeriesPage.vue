<script>
export default {
  data: () => ({
    myLists: [],
    greet: 'Aloha',
    title: 'The Gift',
    titleOriginal: 'Atiye',
    basedOnBook: true,
    bookName: 'Dünyanin Uyanisi',
    bookAuthor: 'Şengül Boybaş',
    tmpId: null,
    tmpName: null,
    tmpUri: null,
    tmpPhoto: null,
    tmpHobbies: null,
    tmpFavourite: false,
    cast: [
      {
        id: 1,
        name: 'Beren Saat',
        uri: 'https://www.imdb.com/name/nm1754321/',
        photo:
          'https://imgs.search.brave.com/5zdAwhRQ_igUZWNM_18F9wUGwpwPkgKle2NDG2tZaf8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RjL2M2/L2UyL2RjYzZlMjdm/ZWUzYzE0MWM1MTIy/MWJkNTkyMTJmNWJl/LmpwZw',
        isFavourited: true
      },
      {
        id: 2,
        name: 'Mehmet Günsür',
        uri: 'https://www.imdb.com/name/nm0348347/',
        photo:
          'https://imgs.search.brave.com/dxT-mM_Cnxi3Lfqk-1JE66CLfrttu9UMjYNFQAoqMRA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFiZXJsZXIuY29t/L2kvMTAvbWVobWV0/LWd1bnN1cl85ODMy/X2IuanBn',
        hobbies: 'Bowling',
        isFavourited: false
      },
      {
        id: 3,
        name: 'Melisa Şenolsun',
        uri: 'https://www.imdb.com/name/nm7487578/',
        photo:
          'https://imgs.search.brave.com/pBybiKY1EX8EbQDqwyHxoqZDJgYgZaSXVXgN9ywElvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubXViaWNkbi5u/ZXQvaW1hZ2VzL2Nh/c3RfbWVtYmVyLzY5/OTg5NS9jYWNoZS02/MTQ3NDgtMTYwNjcx/NTI5MS9pbWFnZS13/ODU2LmpwZz9zaXpl/PTgwMHg',
        hobbies: 'Drinking',
        isFavourited: false
      },
      {
        id: 4,
        name: 'Older Ladie',
        uri: 'https://www.repubblica.it/serietv/schede/the-gift/4881/',
        photo: 'https://pad.mymovies.it/filmclub/attori/120219.jpg',
        hobbies: 'Also, drinking',
        isFavourited: true
      }
    ]
  }),
  computed: {},
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.cast.push({
        id: this.tmpId,
        name: this.tmpName,
        uri: this.tmpUri,
        photo: this.tmpPhoto,
        hobbies: this.tmpHobbies,
        isFavourited: this.tmpFavourite
      })
      // console.log('CAST:', this.cast)
    }
  }
}
</script>

<template>
  <h1>
    {{ title }} <span v-if="titleOriginal">(original: {{ titleOriginal }})</span>
  </h1>
  <div v-if="basedOnBook && bookName">
    Based on the book {{ bookName }}, written by {{ bookAuthor }}.
  </div>

  <h2>Cast:</h2>
  <h3>Favourites</h3>
  <span v-for="(castMember, index) in cast" :key="index">
    <div v-if="castMember.isFavourited">{{ castMember.name }}</div>
  </span>

  <ul>
    <li v-for="(castMember, index) in cast" :key="index">
      <img v-if="castMember.photo" :src="castMember.photo" alt="" />
      <h4>{{ castMember.name }}</h4>
      <div v-if="castMember.uri">
        <a :href="castMember.uri" target="_blank"
          ><span>{{ castMember.uri }}</span></a
        >
      </div>
      <div v-if="castMember.hobbies"><strong>Hobbies:</strong> {{ castMember.hobbies }}</div>
      <button @click="castMember.isFavourited = !castMember.isFavourited">Favourite toggle</button>
      <div v-if="castMember.isFavourited"><strong>Favourite!</strong></div>
    </li>
  </ul>

  <form @submit.prevent="handleSubmit">
    <h3>New cast</h3>
    <label>id</label> <input type="number" required v-model="tmpId" /><br />
    <label>name</label> <input type="text" required v-model="tmpName" /><br />
    <label>uri</label> <input type="text" required v-model="tmpUri" /><br />
    <label>photo</label> <input type="text" v-model="tmpPhoto" /><br />
    <label>hobbies</label> <input type="text" v-model="tmpHobbies" /><br />
    <label>Favourite</label><input type="checkbox" v-model="tmpFavourite" />
    <input type="submit" value="submit" />
  </form>
</template>
