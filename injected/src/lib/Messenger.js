import EventEmitter from 'events';

import * as messageTypes from '../../../shared/messageTypes';

class Messenger extends EventEmitter {
	constructor() {
		super();

		this._informDetached = this._informDetached.bind(this);
		this._informUpdate = this._informUpdate.bind(this);
		this._sendRootToFrontend = this._sendRootToFrontend.bind(this);
		this._sendSelectedToFrontend = this._sendSelectedToFrontend.bind(this);

		this.on('detached', this._informDetached);
		this.on('root', this._sendRootToFrontend);
		this.on('selected', this._sendSelectedToFrontend);
		this.on('update', this._informUpdate);
	}

	_informDetached(data) {
		window.postMessage(
			{
				message: {
					data,
					type: messageTypes.DETACHED
				},
				from: 'backend'
			},
			'*'
		);
	}

	_informUpdate(data) {
		window.postMessage(
			{
				message: {
					data,
					type: messageTypes.UPDATE
				},
				from: 'backend'
			},
			'*'
		);
	}

	_sendSelectedToFrontend(data) {
		window.postMessage(
			{
				message: {
					data,
					type: messageTypes.SELECTED
				},
				from: 'backend'
			},
			'*'
		);
	}

	_sendRootToFrontend(data) {
		window.postMessage(
			{
				message: {
					data,
					type: messageTypes.NEW_ROOT
				},
				from: 'backend'
			},
			'*'
		);
	}
}

export default Messenger;
