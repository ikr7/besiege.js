'use strict';

const Block = require('../block.js');

class Piston extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 18, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Piston;