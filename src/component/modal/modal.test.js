import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';


configure({adapter: new Adapter()});

/**
|--------------------------------------------------
| Test cases with children nodes.
|--------------------------------------------------
*/
describe('Modal with children', () => {
  it('should redners without crashing', () => {
    let closeHandler = jest.fn(() => {});
    let wrapper = shallow(<Modal closeHandler={closeHandler}>Test</Modal>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should renders its child elements', () => {
    let closeHandler = jest.fn(() => {});
    let wrapper = mount(<Modal closeHandler={closeHandler}>Test</Modal>);
    expect(wrapper.find('.modal-content').text()).toEqual('Test');
  });

  it('should set default props correctly.', () => {
    let closeHandler = jest.fn(() => {});
    let wrapper = mount(<Modal closeHandler={closeHandler}>Test</Modal>);
    
    expect(wrapper.props().isOpen).toBe(false);
    expect(wrapper.props().delay).toBe(200);
    expect(wrapper.props().className).toEqual('');
    expect(wrapper.props().backdropStyle).toStrictEqual({});
    expect(wrapper.props().modalStyle).toStrictEqual({});
    wrapper.unmount();
  });
  
});


/**
|--------------------------------------------------
| Test cases without children nodes.
|--------------------------------------------------
*/

describe('Modal without children', () => {
  let callback = jest.fn(() => {});
  let wrapper = shallow(<Modal closeHandler={callback} />);
  it('should renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should set default props correctly', () => {
    expect(wrapper.props().show).toBe(false);
    expect(wrapper.props().startAnimation).toBe(false);
    expect(wrapper.instance()).toBeInstanceOf(Modal);
    expect(wrapper.instance().props.delay).toEqual(200);
    expect(wrapper.props().className).toEqual('');
    expect(wrapper.props().backdropStyle).toStrictEqual({});
    expect(wrapper.props().modalStyle).toStrictEqual({});
  })
})

/**
|--------------------------------------------------
| Test Life cyclehooks.
|--------------------------------------------------
*/
describe('Modal Lifecycle hooks', () => {
  let callback = jest.fn(() => {});
  let wrapper = shallow(<Modal closeHandler={callback} isOpen={true}></Modal>);

  it('should render modal without crashing when modal is opened', () => {  
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state correctly', () => {
    expect(wrapper.state('show')).toBe(true);
    expect(wrapper.state('animation')).toBe(false);
  });

  describe('on start rendering on UI', () => {


    it('should call rendreModal Method', () => {
      let spy = jest.spyOn(Modal.prototype, 'renderModal');
      let modal = mount(<Modal closeHandler={callback} isOpen={true}>Test</Modal>);
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
      modal.unmount();
    });

    it('should set animation after specified delay time', () => {
      jest.useFakeTimers();
      let modal = mount(<Modal closeHandler={callback} isOpen={true}>Test</Modal>);

      expect(setTimeout).toHaveBeenCalled();
      expect(setTimeout.mock.calls[0][1]).toBe(modal.prop('delay'));


      jest.runAllTimers();
      expect(modal.state('show')).toBe(true);
      expect(modal.state('animation')).toBe(true);

      modal.unmount();
      
    });

  });

});

/**
|--------------------------------------------------
| Testing Events.
|--------------------------------------------------
*/

describe('Click Events', () => {
  
  it('should call given callback function on clicking on X icon', () => {
    const callback = jest.fn();
    const modal = mount(<Modal isOpen={true} closeHandler={callback}  title="test"></Modal>);
    expect(callback.mock.calls.length).toBe(0);
    const crossIcon = modal.find('.modal-header > .close > span');
    crossIcon.simulate('click');

    expect(callback).toHaveBeenCalled();
    modal.unmount();
  });

  it('should call given callback on clicking on close button', () => {
    const callback = jest.fn();
    const modal = mount(<Modal isOpen={true} closeHandler={callback}  title="test"></Modal>);

    expect(callback.mock.calls.length).toBe(0);
    const closeButton = modal.find('.modal-footer > button');
    closeButton.simulate('click');

    expect(callback).toHaveBeenCalled();
    modal.unmount();
  });
})
