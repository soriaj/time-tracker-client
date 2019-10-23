import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import ControlBar from '../ControlBar/ControlBar'
import './ListItems.css'

class ListItems extends Component {
   render() {  
      // console.log(this.props)
      return (
         <>
         <div className="ListItem">
            <div className="ListItem-icon">
               <div className="ListItem-circle">
                  <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line"></FontAwesomeIcon>
               </div>
            </div>
            <div className="ListItem-content">
               <div className="ListItem-heading">
                  <div className="ListItem-title">Company: {this.props.company}
                     <p className="ListItem-summary">Summary: {this.props.title}</p>
                  </div>
                  <div className="ListItem-date">Created: {this.props.date}</div>
               </div>
               <div className="ListItem-actions">
                  <div className="ListItem-status">
                     <p>{this.props.description.slice(0, 50)}{'...'}</p>
                  </div>
                  <ControlBar 
                     id={this.props.id}
                     history={this.props.history}
                  />
               </div>
            </div>
         </div>
         </>
      );
   }
}

export default ListItems;