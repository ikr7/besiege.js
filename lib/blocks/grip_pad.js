'use strict';

const Block = require('../block.js');

class GripPad extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 49, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = GripPad;