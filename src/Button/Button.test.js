import renderer from 'react-test-renderer';
import React from 'react';
import Button from './Button';

const renderTree = tree => renderer.create(tree);
describe('<Button>', () => {
  it('should render component', () => {
    expect(renderTree(<Button 
    />).toJSON()).toMatchSnapshot();
  });
  
});