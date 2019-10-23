import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import  './Item.css'
import ControlBar from '../ControlBar/ControlBar'

class Item extends Component {
   render() {
      console.log(this.props)
      // const {}
      return (
         <>
         <div className="ListItem-icon">
            <div className="ListItem-circle">
               <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line"></FontAwesomeIcon>
            </div>
         </div>
         <div className="ListItem-content">
            <div className="ListItem-heading">
               <div className="ListItem-title">Company: {this.props.company_name}
                  <p className="ListItem-summary">Summary: {this.props.title}</p>
               </div>
               <div className="ListItem-size">{this.props.date}</div>
            </div>
            <div className="ListItem-actions">
               <div className="ListItem-status">
                  <p>{this.props.description.slice(0, 50)}</p>
               </div>
               <ControlBar />
            </div>
         </div>
         </>
      );
   }
}

export default Item;