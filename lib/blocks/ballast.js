'use strict';

const Block = require('../block.js');

class Ballast extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 35, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Ballast;