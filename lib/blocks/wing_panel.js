'use strict';

const Block = require('../block.js');

class WingPanel extends Block {
	constructor (option) {
		super({
			id: 34, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = WingPanel;