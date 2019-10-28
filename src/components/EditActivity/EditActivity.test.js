import React from 'react'
import ReactDOM from 'react-dom'
import EditActivity from './EditActivity'

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<EditActivity match={{params: {activityId: 'bf4fa1f4-2ef0-4bf1-a6cd-45b985d7d5c9'} }}/>, div)
   ReactDOM.unmountComponentAtNode(div);
})