'use strict';

const Block = require('../block.js');

class AerodynamicPropellor extends Block {
	constructor (option) {
		super({
			id: 26, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = AerodynamicPropellor;