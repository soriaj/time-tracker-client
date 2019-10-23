import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
// import { format } from 'date-fns'
import ControlBar from '../ControlBar/ControlBar'

class ListItems extends Component {
   render() {
      const { title, company, customer, description, date} = this.props
      console.log(this.props)
      return (
         <>
         <div className="ListItem-icon">
            <div className="ListItem-circle">
               <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line"></FontAwesomeIcon>
            </div>
         </div>
         <div className="ListItem-content">
            <div className="ListItem-heading">
               <div className="ListItem-title">{title}</div>
               <div className="ListItem-size">{date}</div>
            </div>
            <div className="ListItem-actions">
               <div className="ListItem-status">
                  <p>{description}</p>
               </div>
               <ControlBar />
            </div>
         </div>
         </>
      );
   }
}

export default ListItems;