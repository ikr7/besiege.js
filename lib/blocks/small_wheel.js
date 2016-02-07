'use strict';

const Block = require('../block.js');

class SmallWheel extends Block {
	constructor (option) {
		super({
			id: 50, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SmallWheel;