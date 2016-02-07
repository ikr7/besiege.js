'use strict';

const Block = require('../block.js');

class ContractableSpring extends Block {
	constructor (option) {
		super({
			id: 9, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = ContractableSpring;