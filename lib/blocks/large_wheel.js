'use strict';

const Block = require('../block.js');

class LargeWheel extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 46, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = LargeWheel;