'use strict';

const Block = require('../block.js');

class SmallTorch extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 47, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SmallTorch;