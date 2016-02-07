'use strict';

const Block = require('../block.js');

class Boulder extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 36, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Boulder;