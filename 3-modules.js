//modules - encapsulated code (only share minium)
//CommonJS, every file is module in node by defualt
const names = require('./4-names')
const sayHI = require('./5-utils')


const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHI('susan')
sayHI(names.john)
sayHI(names.peter)