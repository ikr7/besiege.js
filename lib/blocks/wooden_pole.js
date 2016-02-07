'use strict';

const Block = require('../block.js');

class WoodenPole extends Block {
	constructor (option) {
		super({
			id: 41, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = WoodenPole;