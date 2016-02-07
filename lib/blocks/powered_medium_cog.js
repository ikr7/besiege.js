'use strict';

const Block = require('../block.js');

class PoweredMediumCog extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 39, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = PoweredMediumCog;