'use strict';

const Block = require('../block.js');

class MetalBrade extends Block {
	constructor (option) {
		super({
			id: 3, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = MetalBrade;