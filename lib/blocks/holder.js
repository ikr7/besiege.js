'use strict';

const Block = require('../block.js');

class Holder extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 30, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Holder;