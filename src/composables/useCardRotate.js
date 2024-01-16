import { ref } from 'vue'

let rotate = ref(false)
export default function useCardRotate(from = '', to = '') {
	rotate.value = !rotate.value
	const el = document.getElementsByClassName('cards-draaideur')[0]

	if (to !== '') {
		const cards = el.getElementsByClassName('card')

		for (let i = 0; i < cards.length; i++) {
			if (cards[i].id === 'card-' + from || cards[i].id === 'card-' + to)
				cards[i].style.display = 'block'
			else cards[i].style.display = 'none'
		}
	}
	if (rotate.value === true) el.classList.add('rotate')
	else el.classList.remove('rotate')
}
