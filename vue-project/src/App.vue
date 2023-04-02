<script setup>
import { reactive, onMounted } from 'vue'
import IncrGame from './IncrGame/incrGame.js'
import AutoClicker from './components/AutoClicker.vue'
</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<h1>Score: <span id='score'>{{ game.curPoints }}</span></h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<button type="button" class="btn btn-success btn-lg" @click="game.registerClick()">Click!</button>
			</div>
		</div>
		<AutoClicker :game="game"></AutoClicker>
	</div>
	<footer class="">
		<button type="button" class="btn btn-info" @click="game.start()">Start</button>
		<button type="button" class="btn btn-info" @click="game.stop()">Stop</button>
		<button type="button" class="btn btn-info" @click="game.reset()">Reset</button>
		<button type="button" class="btn btn-info" @click="game.resetTimer()">Reset Just Timer</button>
	</footer>
</template>

<script>
// export default {
// 	data() {
// 		return {
// 			game: new IncrGame()
// 		}
// 	},
// 	mounted() {
// 		this.game.start();
// 	}
// }

const game = reactive(new IncrGame());
onMounted(() => { 
	alert('here');
	game.start();
});
</script>
