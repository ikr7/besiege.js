'use strict';

const Block = require('../block.js');

class FlyingBlock extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 14, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = FlyingBlock;