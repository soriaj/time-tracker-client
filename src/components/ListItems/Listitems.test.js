import React from 'react'
import ReactDOM from 'react-dom'
import ListItems from './ListItems'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<ListItems date={new Date()} description={'This Is a Test'}/>, div)
   ReactDOM.unmountComponentAtNode(div);
})