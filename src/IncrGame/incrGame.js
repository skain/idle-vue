import AutoClicker from "./autoClicker";
import GameState from "./gameState";

export default class IncrGame {
	constructor() {
		this.intervalId = null;
		this.gameState = new GameState();
		this.autoClickers = [
			new AutoClicker('First Order', 10, 10, 0.5)
		];
		this.loadGameState();
	}

	get gameStateStorageKey() {
		return 'gameState';
	}

	get curPoints() {
		return this.gameState.curPoints;
	}

	set curPoints(value) {
		this.gameState.curPoints = value;
	}

	loadGameState() {
		const fromStorage = JSON.parse(localStorage.getItem(this.gameStateStorageKey));
		if (fromStorage !== null) {
			console.log('loading from storage');
			this.gameState = new GameState(fromStorage.curPoints, new Date(fromStorage.lastUpdated), fromStorage.autoClickerQtys);
			console.log(this.gameState);
		}

		this.updateAutoClickerQtysFromGameState();
	}

	updateAutoClickerQtysFromGameState() {
		this.autoClickers.forEach(ac => {
			const storageQty = this.gameState.autoClickerQtys[ac.name];
			if (storageQty) {
				ac.owned = storageQty;
			}
		});
	}

	saveGameState() {
		this.gameState.curPoints = this.curPoints;
		this.updateGameStateAutoClickerQtys();
		localStorage.setItem(this.gameStateStorageKey, JSON.stringify(this.gameState));
	}

	updateGameStateAutoClickerQtys() {
		this.autoClickers.forEach(ac => {
			this.gameState.autoClickerQtys[ac.name] = ac.owned;
		});
	}

	update() {
		let ticks = new Date() - this.gameState.lastUpdated;
		this.registerAutoClicksForTicksEllapsed(ticks);
		this.resetTimer();
		this.saveGameState();
	}

	getAutoClicksPerSecondModifier() {
		let modifier = 0;
		this.autoClickers.forEach(mod => {
			modifier += mod;
		});

		return modifier;
	}

	registerAutoClicksForTicksEllapsed(ticks) {
		let seconds = Math.floor(ticks / 1000);
		let cpsModifier = this.getAutoClicksPerSecondModifier();
		let timesToClick = Math.floor(seconds * cpsModifier);
		for (let i = 0; i < timesToClick; i++) {
			this.registerClick();
		}
	}

	resetTimer() {
		this.gameState.lastUpdated = new Date();
	}

	start() {
		const updateFunc = this.update.bind(this);
		updateFunc();
		this.intervalId = setInterval(updateFunc, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
	}

	reset() {
		this.resetTimer();
		this.curPoints = 0;
	}

	getClickCoefficient() {
		return 1;
	}

	getClickModifier() {
		return 1;
	}

	registerClick() {
		let coefficient = this.getClickCoefficient();
		let modifier = this.getClickModifier();
		console.log(this.curPoints);

		this.curPoints += coefficient * modifier;
	}
}
