'use strict';

const Block = require('../block.js');

class SpinningBlock extends Block {
	constructor (option) {
		super({
			id: 22, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SpinningBlock;