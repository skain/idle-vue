export default class AutoClicker {
	constructor(name, pointsToUnlock, baseCost, clicksPerSecond) {
		this.name = name;
		this.pointsToUnlock = pointsToUnlock;
		this.baseCost = baseCost;
		this.clicksPerSecond = clicksPerSecond;
		this.owned = 0;
	}

	get curCost() {
		return this.baseCost * (2 ** this.owned);
	}

	buyQty(qty) {
		this.owned += qty;
	}
}