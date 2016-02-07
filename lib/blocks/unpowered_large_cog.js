'use strict';

const Block = require('../block.js');

class UnpoweredLargeCog extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 51, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = UnpoweredLargeCog;