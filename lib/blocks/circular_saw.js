'use strict';

const Block = require('../block.js');

class CircularSaw extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 17, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = CircularSaw;