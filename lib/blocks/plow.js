'use strict';

const Block = require('../block.js');

class Plow extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 33, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Plow;