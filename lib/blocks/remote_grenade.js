'use strict';

const Block = require('../block.js');

class RemoteGrenade extends Block {
	constructor (option) {
		option = option || {};
		super({
			id: 54, 
			position: option.position, 
			rotation: option.rotation, 
			scale: option.scale
		});
	}
}

module.exports = RemoteGrenade;