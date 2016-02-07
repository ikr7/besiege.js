'use strict';

const Block = require('../block.js');

class SteeringHinge extends Block {
	constructor (option) {
		super({
			id: 28, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SteeringHinge;