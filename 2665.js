/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {

    const object = {
        init: Number,
        aux: Number,
        increment: function(){ return ++this.init},
        decrement: function(){ return --this.init},
        reset: function(){ 
            this.init = this.aux;
            return this.init;
        }
    }


    const temp = Object.create(object);

    temp.init = init;
    temp.aux = init;

    return temp;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

