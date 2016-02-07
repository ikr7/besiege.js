'use strict';

const Block = require('../block.js');

class CoreBlock extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 0, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = CoreBlock;