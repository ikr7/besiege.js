'use strict';

const Block = require('../block.js');

class WoodenBlock extends Block {
	constructor (option) {
		super({
			id: 1, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = WoodenBlock;