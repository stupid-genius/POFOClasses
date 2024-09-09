class ABC{
	_name = 'ABC';
	constructor(){
	}

	get name(){
		return this._name;
	}

	ABCMethod(){
		return 'ABCMethod';
	}
}

class Clazz extends ABC{
	constructor(){
		super();
		this._name = 'Clazz';
	}

	classMethod(){
		return 'Class Method';
	}
}
Object.defineProperty(Clazz, 'staticProperty', {
	value: 'Clazz static'
});

module.exports = {
	ABC,
	Clazz
};
