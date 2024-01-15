import { ref } from 'vue'

let rotate = ref(false)
export default function useCardRotate(from = '', to = '') {
	rotate.value = !rotate.value
	const el = document.getElementsByClassName('cards-draaideur')[0]

	if (to !== '') {
		// console.log('aaaaaaaaaaa')
		const cards = el.getElementsByClassName('card')
		console.log(cards)

		for (let i = 0; i < cards.length; i++) {
			console.log(cards[i].id)
			if (cards[i].id === 'card-' + from || cards[i].id === 'card-' + to)
				cards[i].style.display = 'block'
			else cards[i].style.display = 'none'
		}
	}
	if (rotate.value === true) el.classList.add('rotate')
	else el.classList.remove('rotate')
}
