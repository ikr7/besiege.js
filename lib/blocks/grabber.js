'use strict';

const Block = require('../block.js');

class Grabber extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 27, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Grabber;