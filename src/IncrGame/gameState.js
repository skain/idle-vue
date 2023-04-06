export default class GameState {
	constructor(curPoints = 0, lastUpdated = new Date(), autoClickerQtys = {}) {
		this.curPoints = curPoints;
		this.lastUpdated = lastUpdated;
		this.autoClickerQtys = autoClickerQtys;
	}
}