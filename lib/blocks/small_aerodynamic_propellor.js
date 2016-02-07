'use strict';

const Block = require('../block.js');

class SmallAerodynamicPropellor extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 52, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = SmallAerodynamicPropellor;