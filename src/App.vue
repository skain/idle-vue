<script setup>
import { reactive, onMounted, ref } from 'vue'
import IncrGame from './IncrGame/incrGame.js'
import AutoClicker from './components/AutoClicker.vue'


const game = reactive(new IncrGame());

onMounted(() => {
	game.start();
});

</script>

<template>
	<h1>Score: <span id='score'>{{ game.curPoints }}</span></h1>
	<button type="button" id="clickBtn" @click="game.registerClick()">Click!</button>
	<div v-for="autoClicker in game.autoClickers">
		<AutoClicker  v-if="game.curPoints > autoClicker.pointsToUnlock"  :autoClicker="autoClicker" :curScore="game.curPoints" />
	</div>
	<footer>
		<button type="button" class="" @click="game.start()">Start</button>
		<button type="button" class="" @click="game.stop()">Stop</button>
		<button type="button" class="" @click="game.reset()">Reset</button>
		<button type="button" class="" @click="game.resetTimer()">Reset Just Timer</button>
	</footer>
</template>
