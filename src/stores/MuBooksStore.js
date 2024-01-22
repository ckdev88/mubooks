import { defineStore } from 'pinia'
import { useAlertStore } from '../stores/AlertStore'

export const useMuBooksStore = defineStore('MuBooksStore', {
	state: () => ({ bookList: JSON.parse(localStorage.getItem('MyBooks')), loading: false }),
	getters: {
		getBookList() {
			return this.bookList
		},
		getSmallBooks() {
			return this.bookList.filter((book) => book.pages < 150)
		},
		getSavedBooks() {
			return this.bookList
		},
		getReadingBook() {
			// TODO: use (i.e. in ReadingItem.vue) or remove
			return this.bookList.filter((book) => book.reading === true)
		}
	},
	actions: {
		saveBookToggle(index, book) {
			this.booklist[index].saved = !this.booklist[index].saved
			if (this.booklist[index].saved === true) this.addMyBook(book)
		},

		addBookReading(index) {
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
			// TODO: later slim mergen met addBookReading()
			console.log('start action endBookReading')

			console.log('endReadingBook...')
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			console.log('myBooks:', myBooks)
			let newArr = []

			var readingVal
			var finishedVal
			for (let i = 0; i < myBooks.length; i++) {
				console.log(myBooks[i].title)
				console.log(myBooks[index].title)
				if (i === index) {
					console.log('oi?')
					readingVal = false
					finishedVal = true
				} else {
					console.log('oal')
					readingVal = myBooks[i].reading
					finishedVal = myBooks[i].finished
				}
				newArr.push({
					title: myBooks[i].title,
					date_published: myBooks[i].date_published,
					authors: myBooks[i].authors,
					pages: myBooks[i].pages,
					image: myBooks[i].image,
					reading: readingVal,
					finished: finishedVal
				})
			}

			console.log('newArr in endBookReading:', newArr)
			// stringify array intoarray storage
			localStorage.setItem('MyBooks', JSON.stringify(newArr))
			// ... and into this state
			this.bookList = myBooks
			useAlertStore().currentAlert = 'Finished reading'
			setTimeout(() => {
				useAlertStore().currentAlert = null
			}, 3000)
			console.log('new MyBooks:', JSON.parse(localStorage.getItem('MyBooks')))
		},
		addMyBook(book, reading = false) {
			console.log('add book')
			// get current localstorage and convert to arr
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			if (!myBooks) myBooks = []
			myBooks.push({
				// build object and push it in the array
				title: book.title,
				date_published: book.date_published,
				authors: book.authors,
				pages: book.pages,
				image: 'https://images.isbndb.com/covers' + book.image,
				reading: reading,
				finished: false
			})
			// stringify array into localstorage
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
			// ... and into this state
			this.bookList = myBooks

			useAlertStore().currentAlert = 'Added book'
			setTimeout(() => {
				useAlertStore().currentAlert = null
			}, 3000)

			console.log('this.bookList (addMyBook):', this.bookList)

			return this.bookList
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
			console.log('-------------')
			console.log(index)
			// console.log(this.bookList[index].reading)
			console.log(this.bookList)
			console.log('rrrrrrrrrrrrr')

			// if (this.bookList[index].reading === true) return true
			// return false
		},
		isFinished(index) {
			console.log('this.booklist:', this.booklist)
			// const savedArr = this.bookList
			// if (savedArr) {
			// 	for (let i = 0; i < savedArr.length; i++) {
			// 		if (savedArr[i].finished === this.bookList[index].finished) return true
			// 	}
			// }
			return false
		},
		// 	toggleReadingBook(index){
		// if (state.results[index].saved === false) toggleFavBook(index, book)
		//
		// for (let i = 0; i < state.results.length; i++) {
		// 	state.results[i].reading = false
		// }
		// state.results[index].reading = !state.results[index].reading
		// if (state.results[index].reading === true) state.results[index].finished = false
		//
		// 	},

		removeMyBook(index) {
			// console.log('remove book:', book)

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
				console.log('removed book', this.bookList)

				// getBookList()

				useAlertStore().currentAlert = 'Removed book'
				setTimeout(() => {
					useAlertStore().currentAlert = null
				}, 3000)
			}
		}
	}
})
