'use strict';

const Block = require('../block.js');

class MetalSpike extends Block {
	constructor (option) {
		super({
			id: 20, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = MetalSpike;