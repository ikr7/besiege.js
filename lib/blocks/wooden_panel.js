'use strict';

const Block = require('../block.js');

class WoodenPanel extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 10, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = WoodenPanel;