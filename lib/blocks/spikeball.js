'use strict';

const Block = require('../block.js');

class SpikeBall extends Block {
	constructor (option) {
		super({
			id: 6, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SpikeBall;