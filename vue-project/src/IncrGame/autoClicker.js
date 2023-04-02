export default class AutoClicker {
	constructor(incrGame, name, pointsToUnlock, baseCost, secondsPerClick, uiPosition) {
		this.incrGame = incrGame;
		this.name = name;
		this.pointsToUnlock = pointsToUnlock;
		this.baseCost = baseCost;
		this.uiPosition = uiPosition;
		this.secondsPerClick = secondsPerClick;
	}
}