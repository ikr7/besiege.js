'use strict';

const Block = require('../block.js');

class Hinge extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 5, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Hinge;