'use strict';

const Block = require('../block.js');

class Bomb extends Block {
	constructor (option) {
		super({
			id: 23, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Bomb;