'use strict';

const Block = require('../block.js');

class MotorWheel extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 2, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = MotorWheel;