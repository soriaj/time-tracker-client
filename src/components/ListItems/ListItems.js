import React, { Component } from 'react'
// import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import ControlBar from '../ControlBar/ControlBar'

class ListItems extends Component {
   render() {  
      const { searchTerm } = this.props
      console.log(this.props)
      // const list = activity.filter(act => act.company_name.includes(searchTerm))
      //    .map((act, id) => <Item {...act} key={id} />)
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
                  <div className="ListItem-size">{this.props.date}</div>
               </div>
               <div className="ListItem-actions">
                  <div className="ListItem-status">
                     <p>{this.props.description}</p>
                  </div>
                  <ControlBar />
               </div>
            </div>
         </div>
         {/* <div className="ListItem-icon">
            <div className="ListItem-circle">
               <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line"></FontAwesomeIcon>
            </div>
         </div>
         <div className="ListItem-content">
            <div className="ListItem-heading">
               <div className="ListItem-title">Company: {company}
                  <p className="ListItem-summary">Summary: {title}</p>
               </div>
               <div className="ListItem-size">{date}</div>
            </div>
            <div className="ListItem-actions">
               <div className="ListItem-status">
                  <p>{description.slice(0, 50)}</p>
               </div>
               <ControlBar />
            </div>
         </div> */}
         </>
      );
   }
}

export default ListItems;