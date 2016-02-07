'use strict';

const Block = require('../block.js');

class FlameThrower extends Block {
	constructor (option) {
		super({
			id: 21, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = FlameThrower;