'use strict';

const builder = require('xmlbuilder');
const guid = require('guid');

class Machine {
	constructor (option) {
		this.name = option.name || 'machine';
		this.position = option.position || {x: 0, y: 0, z: 0};
		this.rotation = option.rotation || {x: 0, y: 0, z: 0, w: 1};
		this.blocks = [];
	}
	add (block) {
		this.blocks.push(block);
		return this;
	}
	toString () {
		
		let machine = builder.create('Machine', {
			version: '1.0', 
			encoding: 'utf-8'
		});

		machine.att('version', '1');
		machine.att('name', this.name);

		let global = machine.ele('Global');

		global.ele('Position', {
			x: this.position.x,
			y: this.position.y,
			z: this.position.z
		});

		global.ele('Rotation', {
			x: this.rotation.x,
			y: this.rotation.y,
			z: this.rotation.z,
			w: this.rotation.w
		});

		let blocks = machine.ele('Blocks');

		this.blocks.forEach((e) => {
			
			let block = blocks.ele('Block', {
				id: e.id, 
				guid: guid.create().value
			});
			
			let transform = block.ele('Transform');

			transform.ele('Position', {
				x: e.position.x,
				y: e.position.y,
				z: e.position.z
			});

			transform.ele('Rotation', {
				x: e.rotation.x,
				y: e.rotation.y,
				z: e.rotation.z,
				w: e.rotation.w
			});

			transform.ele('Scale', {
				x: e.scale.x,
				y: e.scale.y,
				z: e.scale.z
			});

			let data = block.ele('Data');

			

		});

		return machine.end({
			pretty: true
		});

	}
}

module.exports = Machine;