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
describe('Modal', () => {
  const closeHandler = jest.fn(() => {});

  it('should redners without crashing when child element present.', () => { 
    const wrapperWithChild = shallow(<Modal closeHandler={closeHandler}>Test</Modal>);
    expect(wrapperWithChild).toMatchSnapshot();
  });
  
  it('should renders without crashing when no child present', () => {
    const wrapper = shallow(<Modal closeHandler={closeHandler} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not animate', () => {
    const wrapper = mount(<Modal closeHandler={closeHandler} withAnimation={false} />);
    const modalContent = wrapper.find('.modal-content');
    const modalStyle =  modalContent.prop('style');
    expect(modalStyle.marginTop).toBe('0');
    wrapper.unmount();
  })
});

/**
|--------------------------------------------------
| Test Life cyclehooks.
|--------------------------------------------------
*/
describe('Modal behaviour when opened intially', () => {
  let callback = jest.fn(() => {});
  let wrapper = shallow(<Modal closeHandler={callback} isOpen={true}></Modal>);

  it('should render modal without crashing', () => {  
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state correctly', () => {
    expect(wrapper.state('show')).toBe(true);
    expect(wrapper.state('animation')).toBe(false);
  });

  describe('when starts rendering on UI', () => {


    it('should call renderModal Method', () => {
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

});
