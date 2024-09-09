const { assert } = require('chai');
const { default: Logger } = require('log-ng');
const { ABC, Clazz } = require('./Class');
const POFO = require('./POFO');

const logger = new Logger('spec.js');

describe('Class', function(){
	before(function(){
		Logger.setLogLevel('debug');
		this.clazz = new Clazz();
	});
	it('should have the proper prototype chain', function(){
		assert.instanceOf(this.clazz, Clazz);
		assert.instanceOf(this.clazz, ABC);
		assert.isFunction(this.clazz.classMethod);
	});
	it('should inherit from base class', function(){
		assert.equal(this.clazz.ABCMethod(), 'ABCMethod');
	});
	it('should hide re-defined properties', function(){
		assert.equal(this.clazz.name, 'Clazz');
	});
	it('should expose public interface of base class', function(){
		assert.equal(this.clazz.ABCMethod(), 'ABCMethod');
	});
	it('doesnt allow for proper private members', function(){
		assert.equal(this.clazz._name, 'Clazz');
	});
});

// the goal is not to verify that JS works,
// but that the POFO is equivalent to the class
describe('Equivalent POFO', function(){
	before(function(){
		Logger.setLogLevel('debug');
		this.pofo = new POFO();
	});
	it('should have the proper prototype chain', function(){
		assert.instanceOf(this.pofo, POFO);
		assert.instanceOf(this.pofo, ABC);
		assert.isFunction(this.pofo.pofoMethod);
	});
	it('should inherit from base class', function(){
		assert.equal(this.pofo.ABCMethod(), 'ABCMethod');
	});
	it('should hide re-defined properties', function(){
		assert.equal(this.pofo.name, 'POFO');
	});
	it('should expose public interface of base class', function(){
		assert.equal(this.pofo.ABCMethod(), 'ABCMethod');
	});
	it('should allow for proper private members', function(){
		assert.equal(this.pofo.pofoProperty, 'private');
		assert.isUndefined(this.pofo._private);
	});
});
