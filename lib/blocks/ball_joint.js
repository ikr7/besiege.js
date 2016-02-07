'use strict';

const Block = require('../block.js');

class BallJoint extends Block {
	constructor (option) {
		super({
			id: 44, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = BallJoint;