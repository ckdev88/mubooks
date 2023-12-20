import { ref } from 'vue'

const globalCount = ref(0)
const incrementGlobalCount = () => {
	globalCount.value += 1
}

const resetGlobalCount = () => {
	globalCount.value = 0
}

export function useCount() {
	const localCount = ref(0)
	const incrementLocalCount = () => {
		localCount.value += 1
	}
	return { incrementLocalCount, incrementGlobalCount, resetGlobalCount, globalCount, localCount }
}
