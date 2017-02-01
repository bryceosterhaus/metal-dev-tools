import * as messageTypes from '../../../shared/messageTypes';

class Messenger {
	static informDetached(data) {
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

	static informUpdate(data) {
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

	static informSelected(data) {
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

	static informNewRoot(data) {
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
