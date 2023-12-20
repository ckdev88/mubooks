<script>
import { useCount } from './../composables/useCountStore'
export default {
	setup() {
		const countStore = useCount()
		return { countStore }
	},
	props: {
		nc: {
			type: Number,
			required: false
		}
	},
	data: () => ({
		count: 10,
		incrementAmount: 7,
		totalcountAmount: 10,
		nc2: 0
	}),
	computed: {
		displayTitle() {
			if (this.totalcountAmount > 20) {
				return 'Counter standard - very long'
			} else return 'Counter standard'
		}
	},
	methods: {
		incrementCount(n) {
			this.totalcountAmount += n
			this.nc2 += n
			this.globalCount += n
		}
	},
	mounted() {
		if (this.nc !== undefined) {
			this.nc2 = this.nc
		} else this.nc2 = this.count
	}
}
</script>

<template>
	<strong>{{ displayTitle }}</strong
	><br />
	<div>
		Base count: {{ count }}, incrementing steps:
		<input type="number" v-model="incrementAmount" style="width: 3rem" />
		<button @click="incrementCount(incrementAmount)">+</button><br />
		<div style="font-weight: bold">
			total:
			{{ totalcountAmount }}
		</div>
		<div>New count base: {{ nc ? nc : count }}, incremented: {{ nc2 }}</div>
		<div>
			Global count: {{ countStore.globalCount }}
			<button @click="countStore.incrementGlobalCount">+</button>
		</div>
		<div>
			Local count: {{ countStore.localCount }}
			<button @click="countStore.incrementLocalCount">+</button>
		</div>
	</div>
</template>
