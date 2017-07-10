import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../client/components/Form';

describe('<Form />', () => {
  const defaultProps = {
    handleChange: jest.fn(() => true),
    handleSubmit: jest.fn(() => true),
    value: '',
  };
  it('renders correctly', () => {
    const tree = renderer.create(<Form {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('fires form submit', () => {
    const wrapper = mount(<Form {...defaultProps} />);
    wrapper.find('form').simulate('submit');
    expect(defaultProps.handleSubmit).toBeCalled();
  });
  it('responds to a name change', () => {
    const event = { target: { value: 'www.cool.xml' } };
    const wrapper = mount(<Form {...defaultProps} />);
    wrapper.update();
    wrapper.find('input').simulate('change', event);
    expect(defaultProps.handleChange).toBeCalled();
  });
  it('should have a value input and a submit input', () => {
    const wrapper = shallow(<Form {...defaultProps} />);
    console.log(expect(wrapper.find('input')));
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
