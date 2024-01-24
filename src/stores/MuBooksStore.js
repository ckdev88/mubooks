import { defineStore } from 'pinia'
import { useAlertStore } from '../stores/AlertStore'

export const useMuBooksStore = defineStore('MuBooksStore', {
	state: () => ({ bookList: JSON.parse(localStorage.getItem('MyBooks')), loading: false }),
	getters: {
		getBookList() {
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList
		},
		getSmallBooks() {
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList.filter((book) => book.pages < 150)
		},
		getSavedBooks() {
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList
		},
		getReadingBook() {
			// TODO: use (i.e. in ReadingItem.vue) or remove
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList.filter((book) => book.reading === true)
		},
		getWishlist() {
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList.filter((book) => book.onWishlist === true)
		},
		getFavorites() {
			if (localStorage.getItem('MyBooks') === null) return false
			return this.bookList.filter((book) => book.isFavorite === true)
		}
	},
	actions: {
		// addMyBook(book, reading = false, wishlist = false) {
		addMyBook(book, reading = false) {
			// if(book.title.length>45){
			// 	book.title_short=book.title.slice(0,45)+'...'
			// }else book.title_short=book.title;
			//
			// get current localstorage and convert to arr
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			if (!myBooks) myBooks = []
			myBooks.push({
				// build object and push it in the array
				title: book.title,
				// title_short: book.title,
				date_published: book.date_published,
				authors: book.authors,
				pages: book.pages,
				image: 'https://images.isbndb.com/covers' + book.image,
				reading: reading,
				finished: false,
				onWishlist: false,
				isFavorite: false
			})
			// stringify array into localstorage
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
			// ... and into this state
			this.bookList = myBooks

			useAlertStore().currentAlert = 'Added book'
			setTimeout(() => {
				useAlertStore().currentAlert = null
			}, 3000)

			return this.bookList
		},
		saveBookToggle(index, book) {
			// done from search-page
			this.booklist[index].saved = !this.booklist[index].saved
			if (this.booklist[index].saved === true) this.addMyBook(book)
		},

		addBookReading(index) {
			// done from savedbooks-page
			console.log('start action addBookReading')

			// only one book at a time can have reading: TRUE, others get FALSE
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			// console.log('myBooks[0]:', myBooks[0])

			// turn on reading
			if (myBooks[index].reading === false) {
				for (let i = 0; i < myBooks.length; i++) {
					myBooks[i].reading = false
				}
				myBooks[index].reading = !myBooks[index].reading
				if (myBooks[index].reading === true) myBooks[index].finished = false
			}

			// stringify array intoarray storage
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
			// ... and into this state // is state here useful if in the template itself it's also
			// defined? reference: SavedBooksPage.vue
			this.bookList = myBooks
			useAlertStore().currentAlert = 'marked book as reading'
			setTimeout(() => {
				useAlertStore().currentAlert = null
			}, 3000)
		},
		endBookReading(index) {
			// done from savedbooks-page
			// TODO: later slim mergen met addBookReading()
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			let newArr = []

			var readingVal
			var finishedVal
			for (let i = 0; i < myBooks.length; i++) {
				if (i === index) {
					readingVal = false
					finishedVal = true
				} else {
					readingVal = myBooks[i].reading
					finishedVal = myBooks[i].finished
				}
				newArr.push({
					title: myBooks[i].title,
					title_short: myBooks[i].title_short,
					date_published: myBooks[i].date_published,
					authors: myBooks[i].authors,
					pages: myBooks[i].pages,
					image: myBooks[i].image,
					reading: readingVal,
					finished: finishedVal
				})
			}

			// stringify array intoarray storage
			localStorage.setItem('MyBooks', JSON.stringify(newArr))
			// ... and into this state
			this.bookList = myBooks
			useAlertStore().currentAlert = 'Finished reading'
			setTimeout(() => {
				useAlertStore().currentAlert = null
			}, 3000)
		},
		addBookWishlist(book) {
			// done directly from search page
			// edit state (book has te be saved, so part of bookList first)
			for (let i = 0; i < this.bookList.length; i++) {
				if (this.bookList[i].title === book.title) this.bookList[i].onWishlist = true
			}
			// edit localstorage
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			for (let i = 0; i < myBooks.length; i++) {
				if (myBooks[i].title === book.title) {
					myBooks[i].onWishlist = true
				}
			}
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
		},
		removeBookWishlist(book) {
			// done directly from search page
			// edit state
			for (let i = 0; i < this.bookList.length; i++) {
				if (this.bookList[i].title === book.title) this.bookList[i].onWishlist = false
			}
			// edit localstorage
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			for (let i = 0; i < myBooks.length; i++) {
				if (myBooks[i].title === book.title) myBooks[i].onWishlist = false
			}
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
		},

		addBookFavorites(book) {
			// done directly from search page
			// edit state (book has te be saved, so part of bookList first)
			for (let i = 0; i < this.bookList.length; i++) {
				if (this.bookList[i].title === book.title) this.bookList[i].isFavorite = true
			}
			// edit localstorage
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			for (let i = 0; i < myBooks.length; i++) {
				if (myBooks[i].title === book.title) {
					myBooks[i].isFavorite = true
				}
			}
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
		},
		removeBookFavorites(book) {
			// done directly from search page
			// edit state
			for (let i = 0; i < this.bookList.length; i++) {
				if (this.bookList[i].title === book.title) this.bookList[i].isFavorite = false
			}
			// edit localstorage
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			for (let i = 0; i < myBooks.length; i++) {
				if (myBooks[i].title === book.title) myBooks[i].isFavorite = false
			}
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
		},
		isSaved(book) {
			// check if incoming book is marked as saved in localstorage
			// const savedArr = JSON.parse(localStorage.getItem('MyBooks'))
			const savedArr = this.bookList
			if (savedArr) {
				for (let i = 0; i < savedArr.length; i++) {
					if (savedArr[i].title === book.title) return true
				}
			}
			return false
		},
		isReading(index) {
			// TODO: wordt nog gelezen maar doet dus niets, opruimen
			console.log('-------------')
			// if (this.bookList[index].reading === true) return true
			// return false
		},
		isFinished(index) {
			// TODO: wordt nog gelezen maar doet dus niets, opruimen
			console.log('------- isfinished check, nodig? ----')
			//this.booklist:', this.booklist)
			// const savedArr = this.bookList
			// if (savedArr) {
			// 	for (let i = 0; i < savedArr.length; i++) {
			// 		if (savedArr[i].finished === this.bookList[index].finished) return true
			// 	}
			// }
			return false
		},

		addToWishlist(book) {},

		removeMyBook(index) {
			// get current localstorage and convert to arr
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			if (!myBooks) console.log('there is nothing to remove')
			else {
				// find identifyer (by index at the moment) :TODO: make it ID based on something like ISBN,
				// ISBN13, ISBN10, OLID, AMZONID or whatever, dno yet

				myBooks.splice(index, 1)

				localStorage.setItem('MyBooks', JSON.stringify(myBooks))
				// ... and into store
				this.bookList = myBooks

				// getBookList()

				useAlertStore().currentAlert = 'Removed book'
				setTimeout(() => {
					useAlertStore().currentAlert = null
				}, 3000)
			}
		}
	}
})
