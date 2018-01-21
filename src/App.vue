<template>
  <router-view></router-view>
</template>

<script>
	
	export default {
		name: 'app-main',
		props: {
		
		},
		data() {
			return {
				data_field: 'data_field'
			}
		},
		mounted() {
			console.log('new component mounted');
		}
	}
</script>

<style lang="scss">

</style>