'use strict';

const Block = require('../block.js');

class Cannon extends Block {
	constructor (option) {
		super({
			id: 11, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Cannon;