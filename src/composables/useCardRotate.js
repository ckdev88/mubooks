import { ref } from 'vue'

let rotate = ref(false)
export default function useCardRotate() {
	rotate.value = !rotate.value
	const el = document.getElementsByClassName('cards-draaideur')[0]
	if (rotate.value === true) el.classList.add('rotate')
	else el.classList.remove('rotate')
}
