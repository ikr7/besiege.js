'use strict';

const Block = require('../block.js');

class FlamingBall extends Block {
	constructor (option) {
		super({
			id: 31, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = FlamingBall;