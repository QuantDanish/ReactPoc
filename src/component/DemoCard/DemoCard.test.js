import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DemoCard from './DemoCard';

configure({adapter: new Adapter()});

describe('Demo Component Testing', () => {
  it('Should renders without crashing', () => {
    let component = shallow(<DemoCard></DemoCard>)
    expect(component).toMatchSnapshot();
  });

  it('Should renders without crashing with props', () => {
    let component = shallow(<DemoCard index={1} title="title" minWidth="50%">Text</DemoCard>);
    expect(component).toMatchSnapshot();
  });

  // it('Should matches the given prop', () => {
  //   let component = shallow(<DemoCard index={1}></DemoCard>);
  //   const recieved = component.props().index;
  //   console.log(component.props());
  //   expect(recieved).toBe(1);
  // })
  
})

