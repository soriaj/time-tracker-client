import React, { Component } from 'react';
import ActivityContext from '../../ActivityContext'


class ViewActivity extends Component {
   static contextType = ActivityContext

   componentDidMount(){

   }
   
   render() {
      return (
         <div>
            <h1>Hello</h1>
         </div>
      );
   }
}

export default ViewActivity;