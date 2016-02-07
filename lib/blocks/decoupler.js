'use strict';

const Block = require('../block.js');

class Decoupler extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 4, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Decoupler;