'use strict';

const Block = require('../block.js');

class Drill extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 48, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = Drill;