jest.unmock('../FlashStateValue');
jest.unmock('../../lib/processStateValues');

import FlashStateValue from '../FlashStateValue';

describe('FlashStateValue', () => {
	it('should render', () => {
		const component = new FlashStateValue();

		expect(snap(component)).toMatchSnapshot();
	});

	it('should add `flash` class', () => {
		const component = new FlashStateValue();

		const spy = jest.fn();

		component.removeFlash = spy;

		component.addFlash();

		expect(component.element.classList).toContain('flash');
		expect(spy).toBeCalled();
	});

	it('should remove `flash` class', () => {
		const component = new FlashStateValue();

		component.element.classList.add('flash');

		component.removeFlash();

		jest.runAllTimers();

		expect(component.element.classList).not.toContain('flash');
	});

	it('should call addFlash if it is not the firstRender', () => {
		const component = new FlashStateValue();

		const spy = jest.fn();

		component.addFlash = spy;

		component._firstRender = false;

		component.syncValue(0, 1);

		expect(spy).toBeCalled();
	});

	it('should set _firstRender to false', () => {
		const component = new FlashStateValue();

		component.syncValue(0, 1);

		expect(component._firstRender).toBe(false);
	});
});
