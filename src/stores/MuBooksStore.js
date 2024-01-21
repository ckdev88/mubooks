import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAlertStore } from '../stores/AlertStore'
const alertStore = useAlertStore()

export const useMuBooksStore = defineStore('MuBooksStore', {
	state: () => ({ bookList: ref(JSON.parse(localStorage.getItem('MyBooks'))), loading: false }),
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
			console.log(
				'asdasd',
				this.bookList.filter((book) => book.reading === true)
			)

			return this.bookList.filter((book) => book.reading === true)
		}
	},
	actions: {
		saveBookToggle(index, book) {
			this.booklist[index].saved = !this.booklist[index].saved
			if (this.booklist[index].saved === true) this.addMyBook(book)
		},

		addBookReading(book) {
			console.log('start action addBookReading')

			// only one book at a time can have reading: TRUE, others get FALSE
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			// console.log('myBooks[0]:', myBooks[0])
			let newArr = []

			var finishedVal
			var readingVal
			for (let i = 0; i < myBooks.length; i++) {
				if (myBooks[i].title == book.title) {
					readingVal = true
					finishedVal = false
				} else {
					readingVal = false
					finishedVal = true
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

			// stringify array intoarray storage
			localStorage.setItem('MyBooks', JSON.stringify(newArr))
			// ... and into this state
			this.bookList = myBooks
			alertStore.currentAlert = 'Added book to reading'
			setTimeout(() => {
				alertStore.currentAlert = null
			}, 3000)
		},
		endBookReading(book) {
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
				console.log(book.title)
				if (myBooks[i].title == book.title) {
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
			alertStore.currentAlert = 'Finished reading'
			setTimeout(() => {
				alertStore.currentAlert = null
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

			alertStore.currentAlert = 'Added book'
			setTimeout(() => {
				alertStore.currentAlert = null
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
		isReading(book) {
			console.log('check is reading')
			const savedArr = this.bookList
			if (savedArr) {
				for (let i = 0; i < savedArr.length; i++) {
					if (savedArr[i].reading === book.reading) return true
				}
			}
			return false
		},
		isFinished(book) {
			const savedArr = this.bookList
			if (savedArr) {
				for (let i = 0; i < savedArr.length; i++) {
					if (savedArr[i].finished === book.finished) return true
				}
			}
			return false
		},

		removeMyBook(book) {
			// console.log('remove book:', book)

			// get current localstorage and convert to arr
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			if (!myBooks) console.log('there is nothing to remove')
			else {
				// find identifyer (by title at the moment) :TODO: make it ID based on something like ISBN,
				// ISBN13, ISBN10, OLID, AMZONID or whatever, dno yet

				// pop the found object out of there / rebuild array without the "removed" one
				let newArr = []
				for (let i = 0; i < myBooks.length; i++) {
					if (myBooks[i].title !== book.title) {
						newArr.push({
							title: myBooks[i].title,
							date_published: myBooks[i].date_published,
							authors: myBooks[i].authors,
							image: myBooks[i].image,
							pages: myBooks[i].pages,
							reading: myBooks[i].reading,
							finished: myBooks[i].finished
						})
					}
				}
				// stringify array into localstorage
				localStorage.setItem('MyBooks', JSON.stringify(newArr))
				// ... and into store
				this.bookList = newArr
				console.log('removed book', this.bookList)

				// getBookList()

				alertStore.currentAlert = 'Removed book'
				setTimeout(() => {
					alertStore.currentAlert = null
				}, 3000)
			}
		}
	}
})
