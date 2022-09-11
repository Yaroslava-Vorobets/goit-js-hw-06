const Counter = function ({
    rootSelector,
    counterValue = 0, step = 1 } = {}) {
    this._value = counterValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);
    this._bindEvents();
}


Counter.prototype._getRefs = function (rootSelector) {

const refs = {};

refs.container = document.querySelector('rootSelector')

refs.btnDec = document.querySelector('[data-action="decrement"]')

refs.btnInc = document.querySelector('[data-action="increment"]')

refs.value = document.querySelector ('#value')

    return refs;    
}
Counter.prototype._bindEvents = function () {
this._refs.btnInc.addEventListener('click', () => {
    this.increment();
    this.updateValueUI()
})
this._refs.btnDec.addEventListener('click', () => {
    this.decrement();
    this.updateValueUI()
})
}

console.log(Counter.prototype._getRefs)

Counter.prototype.updateValueUI = function () {
this._refs.value.textContent = this._value
}

Counter.prototype.increment = function () {
    this._value += this._step 
}

Counter.prototype.decrement = function () {
    this._value -= this._step
}

const newCounter = new Counter({rootSelector:'#counter', step: 1 });
 console.log(newCounter);



