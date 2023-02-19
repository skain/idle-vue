<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import IncrGame from './incr.js'
</script>

<template>
<!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
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
  		<div v-if="game.curPoints > 10" class="row">
  			<div class="col">
  				div
  			</div>
  			<div class="col">
  				div
  			</div>
  		</div>  		
  	</div>
	<footer class="footer mt-auto py-3 bg-dark">
	  <div class="container">
	    <div class="row">
	  			<div class="col">
	  				<button type="button" class="btn btn-info" @click="game.start()">Start</button>
	  				<button type="button" class="btn btn-info" @click="game.stop()">Stop</button>
	  				<button type="button" class="btn btn-info" @click="game.reset()">Reset</button>
	  				<button type="button" class="btn btn-info" @click="game.resetTimer()">Reset Just Timer</button>
	  			</div>
	  		</div>
	  </div>
	</footer>
</template>

<style scoped>

</style>

<script>
export default {
	data() {
		return {
			game: new IncrGame()
		}
	},
	mounted() {
		this.game.start();
	}
}
</script>
