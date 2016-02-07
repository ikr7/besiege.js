'use strict';

const Block = require('../block.js');

class ShrapnelCannon extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 53, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = ShrapnelCannon;