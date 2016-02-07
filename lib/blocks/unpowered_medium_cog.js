'use strict';

const Block = require('../block.js');

class UnpoweredMediumCog extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 38, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = UnpoweredMediumCog;