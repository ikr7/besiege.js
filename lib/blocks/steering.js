'use strict';

const Block = require('../block.js');

class Steering extends Block {
	constructor (option) {
		super({
			id: 13, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Steering;