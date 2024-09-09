const {ABC} = require('./Class');

function POFO(){
	if(!new.target){
		return new POFO(...arguments);
	}

	let _private = 'private';

	const abc = new ABC(...arguments);
	abc._name = 'POFO';

	Object.defineProperties(abc, {
		pofoMethod: {
			value: function(){
				return 'POFO Method';
			}
		},
		pofoProperty: {
			get: function(){
				return _private;
			}
		}
	});

	Object.setPrototypeOf(abc, POFO.prototype);
	return abc;
}
Object.defineProperty(POFO, 'staticProperty', {
	value: 'POFO static'
});
POFO.prototype = Object.create(ABC.prototype);
POFO.prototype.constructor = POFO;

module.exports = POFO;
