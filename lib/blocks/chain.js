'use strict';

const Block = require('../block.js');

class Chain extends Block {
	constructor (option) {
		super({
			id: 12, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Chain;