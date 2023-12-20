<script>
import { watch } from 'vue'
import NavWrapper from './components/NavWrapper.vue'

import { useCount } from './composables/useCountStore'
import { useRouter } from 'vue-router'

export default {
	setup() {
		const countStore = useCount()
		const router = useRouter()
		watch(countStore.globalCount, (value) => {
			// navigate user to posts page when global count ===5
			if (value === 5) {
				router.push('/posts')
			}
		})
		return { countStore }
	},
	components: {
		NavWrapper
	},
	computed: {
		currentPageComponent() {
			return this.currentPage + 'Page'
		}
	},
	methods: {
		showPage(p) {
			this.currentPage = p
			this.countStore.incrementGlobalCount()
		}
	}
}
</script>

<template>
	<header>
		<p>useCountVar: {{ countStore.globalCount }}</p>
		<button @click="countStore.incrementGlobalCount">+</button>
		<NavWrapper />
	</header>
	<main>
		<RouterView />
		<component :is="currentPageComponent">
			<!-- <subtitel>Welkom op de pagina {{ this.$route.name }}!<br /></subtitel> -->
		</component>
	</main>
</template>

<style scoped>
header {
	line-height: 1.5;
	display: block;
}
</style>
