import React, { Component } from 'react';
import ActivityContext from '../../ActivityContext'


class ViewActivity extends Component {
   static contextType = ActivityContext

   componentDidMount(){
      const { activityId } = this.props.match.params
      console.log(activityId)
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