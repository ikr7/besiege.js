'use strict';

const Block = require('../block.js');

class CircleMetalPlate extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 29, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = CircleMetalPlate;