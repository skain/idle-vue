<script>
export default {
	props: {
		autoClicker: Object,
		curScore: Object
	}
}
</script>
<template>
	<div class="acContainer">
		<div>
			<h2>{{ autoClicker.name }}</h2>
			<div>Qty Owned: {{ autoClicker.owned }}</div>
		</div>
		<div>
			<strong>Cost: </strong>{{ autoClicker.curCost }}
			<button type="button" class="buyButton" id="buy1Button" :disabled="autoClicker.curCost > curScore" @click="autoClicker.buyQty(1)">Buy!</button>
		</div>
	</div>
</template>

<style scoped>
.acContainer {
	display: flex;
	justify-content: space-between;
	gap: 1.0em;
}

.acContainer > div {
	border: solid 1px lightblue;
	width: 100%;
	padding: 1.0em;
}
</style>