'use strict';

const Block = require('../block.js');

class HalfPipe extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 37, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = HalfPipe;