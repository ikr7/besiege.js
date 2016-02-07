'use strict';

const Block = require('../block.js');

class WaterCannon extends Block {
	constructor (option) {
		super({
			id: 56, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = WaterCannon;