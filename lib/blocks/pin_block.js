'use strict';

const Block = require('../block.js');

class PinBlock extends Block {
	constructor (option) {
		super({
			id: 57, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = PinBlock;