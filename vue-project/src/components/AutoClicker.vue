<script>
export default {
	props: {
		game: Object
	}
}
</script>
<template>
	<div v-if="game.curPoints > 10" class="acContainer">
		<div>
			div
		</div>
		<div>
			div
		</div>
	</div>
</template>

<style scoped>
.acContainer {
	display: flex;
	justify-content: space-between;
}
</style>