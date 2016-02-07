# Besiege.js

## Install

```
$ npm install git@github.com:ikr7/besiege.js.git
```

## Use

```js
'use strict';

const Besiege = require('besiege.js');

// create new machine
const machine = new Besiege.Machine({
	name: 'my_awesome_machine', 
	position: {
		x: 0, 
		y: 50, 
		z: 0
	}
});

// add block to machine
machine.add(new Besiege.Blocks.CoreBlock({
	position: {x: 0, y: 1, z: 4}
}))

// encode machine as XML & output generated XML
console.log(machine.toString());
```