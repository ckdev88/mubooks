<script setup>
const props = defineProps({
	userArr: { required: true }
})
</script>
<template>
	<h1>Profile: {{ userArr.name }}</h1>
	<dl>
		<h2>login</h2>
		<dd>id</dd>
		<dt>{{ userArr.id }}</dt>
		<dd>username</dd>
		<dt>{{ userArr.username }}</dt>
		<dd>email</dd>
		<dt>{{ userArr.email }}</dt>
		<h2>address</h2>
		<dd>street</dd>
		<dt>{{ userArr.address.street }}</dt>
		<dd>suite</dd>
		<dt>{{ userArr.address.suite }}</dt>
		<dd>city</dd>
		<dt>{{ userArr.address.city }}</dt>
		<dd>zipcode</dd>
		<dt>{{ userArr.address.zipcode }}</dt>
		<dd>geo</dd>
		<dt>{{ userArr.address.geo }}</dt>
		<h2>contact</h2>
		<dd>phone</dd>
		<dt>{{ userArr.phone }}</dt>
		<dd>website</dd>
		<dt>{{ userArr.website }}</dt>
		<h2>Company</h2>
		<dd>name</dd>
		<dt>{{ userArr.company.name }}</dt>
		<dd>catchphrase</dd>
		<dt>{{ userArr.company.catchphrase }}</dt>
		<dd>bs</dd>
		<dt>{{ userArr.company.bs }}</dt>
	</dl>
</template>
<style scoped>
dd {
	clear: left;
	margin-left: 0;
	margin-right: 2em;
	min-width: 5rem;
	float: left;
}
</style>
