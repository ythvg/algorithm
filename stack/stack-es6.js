class Stack {
	constructor() {
		this.dataStore = []
	}
	push(item) {
		this.dataStore.push()
	}
	pop(item) {
		return this.dataStore.pop()
	}
	peek() {
		return this.dataStore[this.size() - 1]
	}
	isEmpty() {
		return this.size() === 0
	}
	size() {
		return this.dataStore.length
	}
}