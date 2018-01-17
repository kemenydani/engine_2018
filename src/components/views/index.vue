<template>
	<div>
		<router-view class="view-content" ></router-view>
	</div>
</template>

<script>
	
	export default {
		name: 'base-index',
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