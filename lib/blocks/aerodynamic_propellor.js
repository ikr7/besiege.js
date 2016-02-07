'use strict';

const Block = require('../block.js');

class AerodynamicPropellor extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 26, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = AerodynamicPropellor;