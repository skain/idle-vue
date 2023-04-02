<script setup>
import { reactive, onMounted } from 'vue'
import IncrGame from './IncrGame/incrGame.js'
import AutoClicker from './components/AutoClicker.vue'


const game = reactive(new IncrGame());

onMounted(() => {
	game.start();
});
</script>

<template>
	<h1>Score: <span id='score'>{{ game.curPoints }}</span></h1>
	<button type="button" class="btn btn-success btn-lg" @click="game.registerClick()">Click!</button>
	<AutoClicker :game="game"></AutoClicker>
	<footer>
		<button type="button" class="btn btn-info" @click="game.start()">Start</button>
		<button type="button" class="btn btn-info" @click="game.stop()">Stop</button>
		<button type="button" class="btn btn-info" @click="game.reset()">Reset</button>
		<button type="button" class="btn btn-info" @click="game.resetTimer()">Reset Just Timer</button>
	</footer>
</template>
