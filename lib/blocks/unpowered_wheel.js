'use strict';

const Block = require('../block.js');

class UnpoweredWheel extends Block {
	constructor (option) {
		super({
			id: 40, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = UnpoweredWheel;