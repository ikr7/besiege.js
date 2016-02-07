'use strict';

const Block = require('../block.js');

class RectangleMetalPlate extends Block {
	constructor (option) {
		super({
			id: 32, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = RectangleMetalPlate;