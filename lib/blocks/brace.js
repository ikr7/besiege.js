'use strict';

const Block = require('../block.js');

class Brace extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 7, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Brace;