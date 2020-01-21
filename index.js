let Max

const noMax = {
	MESSAGE_TYPES: {
		ALL: 'all',
		BANG: 'bang',
		DICT: 'dict',
		NUMBER: 'number',
		LIST: 'list'
	},
	POST_LEVELS: {
		ERROR: 'error',
		INFO: 'info',
		WARN: 'warn'
	},
	addHandler: ()=>{},
	addHandlers: ()=>{},
	getDict: ()=>{},
	outlet: ()=>{},
	outletBang: ()=>{},
	post: ()=>{},
	registerShutdownHook: ()=>{},
	removeHandler: ()=>{},
	removeHandlers: ()=>{},
	setDict: ()=>{},
	updateDict: ()=>{},
	__n4m_getRegisteredShutdownHook: ()=>{}
}

try {
	Max = require('max-api')
} catch(e) {
	Max = noMax
}

module.exports = Max