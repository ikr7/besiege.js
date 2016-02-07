'use strict';

const Block = require('../block.js');

class SwivelJoint extends Block {
	constructor (option) {
		super({
			id: 19, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SwivelJoint;