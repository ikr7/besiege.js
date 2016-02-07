'use strict';

const Block = require('../block.js');

class Wing extends Block {
	constructor (option) {
		super({
			id: 25, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Wing;