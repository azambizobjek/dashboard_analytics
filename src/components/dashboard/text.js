import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
import Analytics from './Analytics'

 class test extends Component {

  
  render() {

    


    
    return (
        <Fragment>
        <div className="breadcrumb-holder">
           <div className="container-fluid">        
             <div className="breadcrumb">           
             <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">text</li>
             </div>
           </div>
       </div>           
            
       

           <Analytics
             
             /> 
           

         
       
 
     </Fragment>
    )
  }
}

const mapStateToProps= state =>({
   
     
})

export default connect(mapStateToProps,{
 
 
  
})(test)