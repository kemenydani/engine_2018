<template>
	<div>
		<h3 class="my-3">Create Article</h3>
		article create
		<div style="height: 2000px"></div>
	</div>
</template>

<script>
	
	export default {
		name: 'article-create',
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