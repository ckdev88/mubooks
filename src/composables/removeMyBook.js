import { useMuBooksStore } from '../stores/MuBooksStore'
const muBooksStore = useMuBooksStore()

import { useAlertStore } from '../stores/AlertStore'
const alertStore = useAlertStore()

export default function removeMyBook(book) {
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
		muBooksStore.bookList = newArr
		console.log('removed book', muBooksStore.bookList)

		alertStore.currentAlert = ' Removed book'
		setTimeout(() => {
			alertStore.currentAlert = null
		}, 3000)
	}
}
