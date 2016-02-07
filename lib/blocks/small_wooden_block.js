'use strict';

const Block = require('../block.js');

class SmallWoodenBlock extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 15, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SmallWoodenBlock;