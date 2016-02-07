'use strict';

const Block = require('../block.js');

class Slider extends Block {
	constructor (option) {
		super({
			id: 42, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Slider;