'use strict';

const Block = require('../block.js');

class Balloon extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 43, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Balloon;