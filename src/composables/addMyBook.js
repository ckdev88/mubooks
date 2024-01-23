import { useMuBooksStore } from '../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

import { useAlertStore } from '../stores/AlertStore'
const alertStore = useAlertStore()

export default function addMyBook(book) {
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
	muBooksStore.bookList = myBooks

	alertStore.currentAlert = 'Added book'
	setTimeout(() => {
		alertStore.currentAlert = null
	}, 3000)
}
