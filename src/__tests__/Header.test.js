import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import Header from '../components/Header';
 
describe('Header Component', () => {
 
    it('has an h1 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<Header/>);    
        let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'h1'
       );
    });
  })