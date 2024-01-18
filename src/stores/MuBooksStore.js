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
		}
	},
	actions: {
		saveBookToggle(index, book) {
			console.log('toggle saved')
			this.booklist[index].saved = !this.booklist[index].saved
			if (this.booklist[index].saved === true) this.addMyBook(book)
		},

		addMyBook(book) {
			console.log('add book:', book)
			// get current localstorage and convert to arr
			let myBooks = JSON.parse(localStorage.getItem('MyBooks'))
			if (!myBooks) myBooks = []
			myBooks.push({
				// build object and push it in the array
				title: book.title,
				date_published: book.date_published
			})
			// stringify array into localstorage
			localStorage.setItem('MyBooks', JSON.stringify(myBooks))
			// ... and into this state
			this.bookList = myBooks

			alertStore.currentAlert = ' Added book'
			setTimeout(() => {
				alertStore.currentAlert = null
			}, 3000)

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
							date_published: myBooks[i].date_published
						})
					}
				}
				// stringify array into localstorage
				localStorage.setItem('MyBooks', JSON.stringify(newArr))
				this.bookList = newArr
				console.log('removed book', this.bookList)

				// getBookList()

				alertStore.currentAlert = ' Removed book'
				setTimeout(() => {
					alertStore.currentAlert = null
				}, 3000)
			}
		}
	}
})
