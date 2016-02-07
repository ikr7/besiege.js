'use strict';

const Block = require('../block.js');

class Suspension extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 16, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Suspension;