import React from 'react';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import renderer from 'react-test-renderer';
import Splash from '../client/components/Splash';

describe('<Splash />', () => {
  it('calls componentDidMount', () => {
    spy(Splash.prototype, 'componentDidMount');
    const wrapper = mount(<Splash />);
    expect(Splash.prototype.componentDidMount.calledOnce).toBe(true);
  });
  it('allows us to set props', () => {
    const wrapper = mount(<Splash init="splash" />);
    expect(wrapper.props().init).toBe('splash');
    wrapper.setProps({ init: 'not splash' });
    expect(wrapper.props().init).toBe('not splash');
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Splash />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
