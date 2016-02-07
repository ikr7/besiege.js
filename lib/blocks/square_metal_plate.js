'use strict';

const Block = require('../block.js');

class SquareMetalPlate extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 24, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SquareMetalPlate;