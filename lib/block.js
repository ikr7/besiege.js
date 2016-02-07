'use strict';

class Block {
	constructor (option) {
		this.id = option.id || 0;
		this.position = option.position || {x: 0, y: 0, z: 0};
		this.rotation = option.rotation || {x: 0, y: 0, z: 0, w: 1};
		this.scale = option.scale || {x: 1, y: 1, z: 1};
	}
}

module.exports = Block;